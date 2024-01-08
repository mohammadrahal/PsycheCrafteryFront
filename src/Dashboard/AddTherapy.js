import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getUserID } from "../util/userData";

const AddTherapy = () => {
    const [userId, setUserId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [education, setEducation] = useState("");
  const [image, setImage] = useState(null);




  useEffect(() => { // Correct useEffect usage
    async function fetchUserId() {
      try {
        const id = await getUserID();
        setUserId(id);
      } catch (error) {
        console.error("Error fetching userId:", error);
        // Handle error
      }
    }

    fetchUserId();
  }, []);


  const handleAddtherapy = async () => {
    if (
      !fullName ||
      !email ||
      !password ||
      !phoneNumber ||
      !address ||
      !description ||
      !education ||
      !image
    ) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    const therapyData = new FormData();
    therapyData.append("userId", userId);
    therapyData.append("description", description);
    therapyData.append("education", education);
    therapyData.append("image", image);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/addtherapy`,
        therapyData
      );

      if (response.status === 200) {
        toast.success("Therapy added successfully.");
        setFullName("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");
        setAddress("");
        setDescription("");
        setEducation("");
        setImage(null);
      } else {
        toast.error("Failed to add therapy information.");
      }
    } catch (error) {
      toast.error("Error adding therapy:", error);
      toast.error("An error occurred while adding therapy information.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleAddtherapy}>Add Therapy</button>
    </div>
  );
};

export default AddTherapy;
