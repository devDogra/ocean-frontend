import "./LoginForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../fakeEnvVars";

export default function LoginForm({ handleLogin }) {
  async function handleLogin(event) {
    event.preventDefault();
    const formDataJson = getFormJSONData(event.target);
    try {
      const response = await axios.post(apiURL + "/login", formDataJson);
      console.log(response);
    } catch (err) {
      const responseData = err.response.data;
      alert(responseData.error);
    }
    return;
  }

  function getFormJSONData(form) {
    const formData = new FormData(form);
    const formDataJson = Object.fromEntries(formData.entries());
    return formDataJson;
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
