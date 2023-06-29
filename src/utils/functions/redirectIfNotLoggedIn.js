import { useEffect } from "react";
import { LOCAL_STORAGE_IS_LOGGED_IN_KEY } from "../../fakeEnvVars";
import { useNavigate } from "react-router-dom";

// export default function redirectIfNotLoggedIn(navigate) {
    //     if (!isLoggedIn) navigate('/login');
    // }
    
export default function useRedirectIfNotLoggedIn() {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem(LOCAL_STORAGE_IS_LOGGED_IN_KEY);
        if (!isLoggedIn) navigate('/login');
    }, [])

    return; 
}