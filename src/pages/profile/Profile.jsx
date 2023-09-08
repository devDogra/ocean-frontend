import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import axios from "axios";
import "./Profile.css";
import jwtDecode from "jwt-decode";
import getLoggedInUserIdFromJWT from "../../utils/functions/getLoggedInUserIdFromJWT";
import getAxiosRequestConfig from "../../utils/functions/getAxiosRequestConfig";
import redirectIfNotLoggedIn from "../../utils/functions/redirectIfNotLoggedIn";
import { LOCAL_STORAGE_JWT_KEY, apiURL } from "../../fakeEnvVars";
import useRedirectIfNotLoggedIn from "../../utils/functions/redirectIfNotLoggedIn";

export default function Profile() {
    useRedirectIfNotLoggedIn()

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [stats, setStats] = useState();

    useEffect(() => {
        async function main() {
            const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY)

            const loggedInUserId = getLoggedInUserIdFromJWT(token);

            // Make sure to ALWAYS send this with every req from the client
            const config = getAxiosRequestConfig(token);
        
            try {
                const url = `${apiURL}/users/${loggedInUserId}?statistics=true`
                const {data: loggedInUser} = await axios.get(url, config);
                console.log(loggedInUser); 
                setEmail(loggedInUser.email);
                setUsername(loggedInUser.username);
                setStats(() => ({...loggedInUser.statistics}))
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
            <ProfileCard email={email} username={username} stats={{...stats}}/>
        </>
    );
}