import "./LoginForm.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form action="#" className="login-form">
      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
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
