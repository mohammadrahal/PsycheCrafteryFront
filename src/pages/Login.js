import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link  } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const validateInput = () => {
    if (!email || !password) {
      console.log("Email and Password are required");
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
      const response = await axios.post(`${process.env.REACT_APP_URL}/api/login`, {
        email,
        password,
      });

      if (response.data && response.data.data) {
        const token = response.data.data;
        // console.log(token)
        sessionStorage.setItem("authToken", token);
        navigate("/");
      } else {
        console.log("Invalid response from server");
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="flex_login ">
       <div className="column1">
       <h1 className="sig_title"> SIGN IN </h1>
      
         <form onSubmit={handleSubmit}>
            <label className="email-label" >Email</label>
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email"
              
              />
          
             <label>Password</label>
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pass"
             
              />
             
             <button className="Login-Button">Log In</button>
             </form>

         </div>


        <div className="column2">
           <p>don't have an account
          {' '}</p>
          <Link to="/register">
           <button className="sign-Up-Button">Sign up</button>
          </Link>
        </div>

</div>
  );
}
export default Login;