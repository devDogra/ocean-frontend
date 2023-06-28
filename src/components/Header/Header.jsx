import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="app-header">
      <h1 id="app-title">
        <span><Link to="/">Board</Link></span>
      </h1>
      <nav id="app-navbar">
        <ul id="app-navbar-links">
          <li className="app-navbar-link"><Link>Dummy</Link></li>
          <li className="app-navbar-link"><Link to="/new-post">Create Post</Link></li>
          <li className="app-navbar-link"><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}
