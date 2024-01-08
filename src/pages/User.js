import { useState, useEffect } from "react";
import axios from "axios";
import '../style/user.css'
import { getUserID } from "../util/userData";
import toast from "react-hot-toast";
const User = () => {
    const [users, setUsers] = useState([]);
  
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
          // console.log(response.data.data)
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        if (!userID) {
          toast.error("UserID is null");
        }
        if (!token) {
          console.error("Token not found in localStorage");
        }
      }
    };
  
  return (
    <div className="container">
      {users.map((user) => (
        <div key={user._id} className="container_user">
          <p className=""> Full Name:{user.fullName}</p>
          <p className="">Email: {user.email}</p>
          <p className="">phone number: {user.phoneNumber}</p>
          <p className="">Address: {user.address}</p>
          <p className="">description: {user.description}</p>
        </div>
      ))}
<button> delete account</button>
        </div>
  )
}

export default User