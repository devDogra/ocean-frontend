import "./LogoutButton.css"; 
import { LOCAL_STORAGE_IS_LOGGED_IN_KEY, LOCAL_STORAGE_JWT_KEY } from "../../fakeEnvVars";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem(LOCAL_STORAGE_IS_LOGGED_IN_KEY); 
        localStorage.removeItem(LOCAL_STORAGE_JWT_KEY); 
        navigate('/login'); 
    }
    return (
        <button onClick={handleLogout} className="logout-btn">Logout</button>
    );
}