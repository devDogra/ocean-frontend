import "./RegisterForm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../../fakeEnvVars";

export default function RegisterForm() {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formDataJson = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(apiURL + "/register", formDataJson);
      console.log(response);
      alert("Account created succesfully");
      navigate("/login"); 
    } catch(err) {
      alert(err.message);
    }

  }
  return (
    <form action="#" className="register-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-field">
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input type="date" id="date-of-birth" name="dateOfBirth" />
      </div>
      <div className="form-buttons">
        <button type="submit">Register</button>
        <Link to="/login">Have an account? Log in</Link>
      </div>
    </form>
  );
}
