import { useState, useEffect } from "react";
import axios from "axios";
// import '../ComponentCSS/User.css'
import { getUserID } from "../util/userData";

const User = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchUser();
    }, []);
  
    const fetchUser = async () => {
      const token = sessionStorage.getItem("authToken");
      const userID = getUserID();
  
      if (token && userID) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_URL}/api/getById/${userID}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
        //   console.log(response.data);
          const userData = response.data.data;
          setUsers([userData]);
        } catch (error) {
          console.error(error.message);
          setError(error.message);
        }
      } else {
        if (!userID) {
          console.error("UserID is null");
        }
        if (!token) {
          console.error("Token not found in localStorage");
        }
      }
    };
  
  return (
    <div>
      {users.map((user) => (
        <div key={user._id} className="container_user">
          <p className=""> Full Name:{user.fullName}</p>
          <p className="">Email: {user.email}</p>
          <p className="">phone number: {user.phoneNumber}</p>
          <p className="">Address: {user.address}</p>
        </div>
      ))}

        </div>
  )
}

export default User