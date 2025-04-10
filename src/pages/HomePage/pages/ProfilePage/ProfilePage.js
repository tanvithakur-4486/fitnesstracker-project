import React, { useEffect, useState } from "react";
import "./styles.css";
import { get, ref } from "firebase/database";
import { database } from "../../../../firebase";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    weight: "",
    heightFt: "",
    heightIn: "",
    gender: "Female",
    city: "",
    state: "",
    location: "India",
  });

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const uid = localStorage.getItem("uid");
    if (!uid) return;

    const snapshot = await get(ref(database, `users/${uid}`));
    const data = snapshot.val();

    if (data) {
      setUserData(data);
      setFormData({ ...formData, ...data }); // optional: auto-fill form
    }
    console.log("Data fetched:", data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can also push to Firebase here
  };

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      <div className="profile-meta">
        <div className="avatar" />
        <div>
          <p><strong>Member Since</strong> 4/3/2025</p>
          <p><strong>Friends</strong> 0</p>
          <p><strong>All Time Distance</strong> mi</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <label>
          First Name*
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name*
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Birthdate*
          <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
        </label>
        <div className="row">
          <label>
            Weight (lb)
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
          </label>
          <label>
            Height (ft)
            <input type="number" name="heightFt" value={formData.heightFt} onChange={handleChange} />
          </label>
          <label>
            Height (in)
            <input type="number" name="heightIn" value={formData.heightIn} onChange={handleChange} />
          </label>
        </div>
        <label>
          Gender*
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          City
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
        <label>
          State
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </label>
        <label>
          Location
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </label>
        <button type="submit" className="save-button">SAVE</button>
      </form>
    </div>
  );
}
