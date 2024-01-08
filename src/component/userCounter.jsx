import React, { useState, useEffect } from "react";
import axios from "axios";
import '../style/counter.css'
const UserCounter = () => {
  const [userCount, setUserCount] = useState(0);
  const [therapyCounter, setTherapyCounter] = useState(0);

  useEffect(() => {
    fetchUserCount();
    fetchtherapy();
  }, []);

  const fetchUserCount = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/counter`
      );
      setUserCount(response.data.userCount);
    } catch (error) {
      console.error("Error fetching user count:", error);
    }
  };
  const fetchtherapy = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/therapyCounter`
      );
      setTherapyCounter(response.data.therapyCount);
      console.log(response.data.therapyCount);
    } catch (error) {
      console.error("Error fetching user count:", error);
    }
  };
  return (
    <div className="container">
      <div className="counter_flex">
        <div className="counter_content">
          <h2>First LEBANESE therapy services</h2>
          <p>100% online</p>
        </div>
        <div>
        <h3> {userCount}</h3>
        <p>Chat, Call, Message, Video Session</p>
        <h3>{therapyCounter}</h3>
        <p> Therapists</p>
        </div>
      </div>
    </div>
  );
};

export default UserCounter;
