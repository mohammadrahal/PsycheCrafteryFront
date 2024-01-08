import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUserID } from "../util/userData";
import "../style/header.css";
const Header = () => {
  const [userID, setUserID] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");
    if (authToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  // to switch between login and logout
  const handleLogin = () => {
    setUserID(getUserID());
    // console.log(getUserID())
    setLoggedIn(true);
    navigate("/login");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setLoggedIn(false);
    navigate("/");
  };

  // end
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header_color">
      <header className=" container header">
        <div className="logo">
          <h3>PsycheCraftery</h3>
        </div>
        <nav className="nav">
          <ul className="items">
            <li className="items_list">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="items_list">Services</li>
            <li className="items_list">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li className="items_list">
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            className="btn-items_list"
            onClick={loggedIn ? handleLogout : handleLogin}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-deep"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6h16" />
              <path d="M7 12h13" />
              <path d="M10 18h10" />
            </svg>
          </div>
          {/* {loggedIn && <span>Welcome back</span>} */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
