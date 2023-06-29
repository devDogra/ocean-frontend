import "./LoginForm.css";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiURL, LOCAL_STORAGE_IS_LOGGED_IN_KEY, LOCAL_STORAGE_JWT_KEY } from "../../fakeEnvVars";
import getFormJSONData from "../../utils/functions/getFormJSONData";

export default function LoginForm({ handleLogin }) {
  const navigate = useNavigate();


  async function handleLogin(event) {
    event.preventDefault();
    const formDataJson = getFormJSONData(event.target);
    try {
      const { data: { message, token, error } } = await axios.post(apiURL + "/login", formDataJson);

      if (error) return alert(error);

      // Else Login Succesful
      localStorage.setItem(LOCAL_STORAGE_JWT_KEY, token);
      localStorage.setItem(LOCAL_STORAGE_IS_LOGGED_IN_KEY, true);
      navigate('/feed'); 

    } catch (err) {
      const responseData = err.response.data;
      alert(responseData.error);
    }
    return;
  }



  return (
    <form action="#" className="login-form" onSubmit={handleLogin}>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" />
      </div>
      <div className="form-buttons">
        <button type="submit">Log In</button>
        <Link to="/register">Create an account</Link>
      </div>
    </form>
  );
}
