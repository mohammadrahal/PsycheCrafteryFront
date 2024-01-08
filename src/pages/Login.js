import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../style/login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateInput = () => {
    if (!email || !password) {
      toast.error("Email and Password are required");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/login`,
        {
          email,
          password,
        }
      );

      if (response.data && response.data.data) {
        const token = response.data.data;
        sessionStorage.setItem("authToken", token);
        navigate("/");
        toast.success("Logged in successfully");
      } else {
        const errorMessage = response.data?.message || "Invalid credentials";
        if (
          errorMessage.toLowerCase().includes("incorrect email") ||
          errorMessage.toLowerCase().includes("incorrect password")
        ) {
          toast.error("Incorrect email or password");
        } else {
          toast.error(errorMessage);
        }
      }
    } catch (error) {
      if (error.response) {
        toast.error("Incorrect email or password");
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("Error occurred during login");
      }
    }
  };

  return (
    <div className="login_container">
      <div className="form">
        <div className="topbox ">
          <h1 className="sig_title"> Login </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg2">
          <div className="input_control">
            <label className="email-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email"
            />
          </div>

          <div className="input_control">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pass"
            />
          </div>
          <div>
          <button className="login-button">Log In</button>
          </div>
        </form>

        <div className="register_container">
          <p>don't have an account? </p>
          <Link to="/register">
            <p className="sign-Up-Button">Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
