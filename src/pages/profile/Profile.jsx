import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import axios from "axios";
// Needed because JWT is stored in its Base64 encoded form, as
// [HEADER | PAYLOAD (USRID) | SIGN ]
import jwtDecode from "jwt-decode";

import { LOCAL_STORAGE_JWT_KEY, apiURL } from "../../fakeEnvVars";

export default function Profile() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        async function main() {
            const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
            const decodedToken = jwtDecode(token);
            const loggedInUserId = decodedToken.sub;
            console.log(loggedInUserId);

            // Make sure to ALWAYS send this with every req from the client
            const config = {
                headers: {
                  Authorization: "Bearer " + token,
                },
              };
        
            try {
                const {data: loggedInUser} = await axios.get(apiURL + '/users' + '/' + loggedInUserId, config);
                console.log(loggedInUser);

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