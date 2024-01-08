import { useState, useEffect } from "react";
import axios from "axios";
import '../style/therapyPage.css'

const Therapy = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    fetchTherapist();
  }, []);

  const fetchTherapist = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/api/gettherapy`
        );
        const therapyData = response.data.data;
        setTherapists(therapyData);
      } catch (error) {
        console.error(error.message);
      }
    } 

  return (
    <div className="container">
      {therapists && therapists.length === 0 ? (
        <p>No Data available</p>
      ) : (
        therapists &&
        therapists.map((therapy) => (
          <div key={therapy._id}>
           <p>User Name: {therapy.userId && therapy.userId.fullName}</p>
            <p>email: {therapy.userId &&therapy.userId.email}</p>
            <p>telephone: {therapy.userId &&therapy.userId.phoneNumber}</p>
            <p>address: {therapy.userId &&therapy.userId.address}</p>
            <p>Description: {therapy.description}</p>
            <p>Education: {therapy.education}</p>
            <div className="image_therapy">
            <img src={therapy.image} alt="Therapy"  />
            </div>
            <div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Therapy;
