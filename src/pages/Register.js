import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address , setAddress] = useState("");
    const [strengthPassword, setStrengthPassword] = useState('')
    const navigate = useNavigate();



    // const validateInput = () => {
    //     if (!fullName) {
    //       console.log("Full name is required");
    //       return false;
    //     }
    //     if (!email) {
    //       console.log("Email is required");
    //       return false;
    //     }
    //     if (!password) {
    //       console.log("Password is required");
    //       return false;
    //     }
    //     if (password.length < 6) {
    //       console.log("Password must be at least 6 characters long");
    //       return false;
    //     }
    //     return true;
    //   };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!validateInput()) return;
        const user = {
          fullName,
          email,
          password,
          phoneNumber,
          address
        };
        
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_URL}/api/register`,
            user
          );
          console.log(response.data.data);
        console.log(user)

          navigate("/");
        } catch (error) {
          console.log(error.response);
        }
      };
  return (
    <div> 
    <form onSubmit={handleSubmit}>
    <div className="form-register">
      <div className="form-input">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
      
        />
      </div>
      <div className="form-input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="phoneNumber">Phone number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="register-button">
        Register
      </button>
    </div>
  </form></div>
  )
}

export default Register