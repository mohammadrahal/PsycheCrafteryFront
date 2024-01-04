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
    <div>
      <header className="header container">
        <div className="logo">
          <h3>PsycheCraftery</h3>
        </div>
        <nav>
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
            <li>
            <button
                className="btn-items_list"
                onClick={loggedIn ? handleLogout : handleLogin}
              >
                {loggedIn ? "Logout" : "Login"}
              </button>
              {loggedIn && <span>Welcome back</span>}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
