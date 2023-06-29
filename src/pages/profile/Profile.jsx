import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import axios from "axios";
import "./Profile.css";
import jwtDecode from "jwt-decode";
import getLoggedInUserIdFromJWT from "../../utils/functions/getLoggedInUserIdFromJWT";
import getAxiosRequestConfig from "../../utils/functions/getAxiosRequestConfig";

import { LOCAL_STORAGE_JWT_KEY, apiURL } from "../../fakeEnvVars";

export default function Profile() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        async function main() {
            const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY)

            const loggedInUserId = getLoggedInUserIdFromJWT(token);

            // Make sure to ALWAYS send this with every req from the client
            const config = getAxiosRequestConfig(token);
        
            try {
                const {data: loggedInUser} = await axios.get(apiURL + '/users' + '/' + loggedInUserId, config);

                setEmail(loggedInUser.email);
                setUsername(loggedInUser.username);
            } catch(err) {
                alert("Error loading profile");
                return;
            }
        }
        main();
    }, [])
    return (
        <>
            <Header />
            <ProfileCard email={email} username={username}/>
        </>
    );
}