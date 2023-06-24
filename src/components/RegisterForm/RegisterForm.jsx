import "./RegisterForm.css";

export default function RegisterForm() {
  return (
    <form action="#" className="register-form">
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
        {/* Put a router link here instead*/}
        <a href="#">Have an account? Log in</a>
      </div>
    </form>
    // </div>
  );
}
