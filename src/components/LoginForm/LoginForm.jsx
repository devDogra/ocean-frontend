import "./LoginForm.css";

export default function LoginForm() {
  return (
    // <div className="login-form-container">
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
        {/* Put a router link here instead*/}
        <a href="#">Create an account</a>
      </div>
    </form>
    // </div>
  );
}
