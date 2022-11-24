import "./navigation.css";
import { useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const logOut = () => {
    console.log("I am logging out");
    localStorage.clear();
    window.location.replace("/login");
  };
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Tutti
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 16" fill="#1A202C">
          <rect width="20" height="3"></rect>
          <rect y="6" width="20" height="3"></rect>
          <rect y="12" width="20" height="3"></rect>
        </svg>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
          {token && (
            <li>
              <a href="#" onClick={logOut}>
                Log out
              </a>
            </li>
          )}
          {!token && (
            <li>
              <a href="/login">Log in</a>
            </li>
          )}
          {token && (
            <>
              <li>
                <a href="/create">Create Ensemble</a>
              </li>
              <li>
                <a href={"/profile?id=" + userId}>Profile</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
