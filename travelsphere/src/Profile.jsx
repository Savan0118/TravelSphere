import React, { useState } from "react";
import "./Home.css";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Profile() {

  const navigate = useNavigate();

  const getProfileData = () => {

    const saved = localStorage.getItem("profileData");

    if (saved) {
      const data = JSON.parse(saved);

      return {
        name: data.name || "Harish Patel",
        email: data.email || "harishpatel123@gmail.com",
        phone: data.phone || "+91 12345 67890",
        address: data.address || "Rajkot, Gujarat",
        budget: data.budget || "Mid Range",
        days: data.days || "4 - 7 days",
        type: data.type && data.type.length
          ? data.type
          : ["Nature", "Culture", "Adventure"]
      };
    }

    return {
      name: "Harish Patel",
      email: "harishpatel123@gmail.com",
      phone: "+91 12345 67890",
      address: "Rajkot, Gujarat",
      budget: "Mid Range",
      days: "4 - 7 days",
      type: ["Nature", "Culture", "Adventure"]
    };
  };

  // ✅ Initialize state directly (NO useEffect)
  const [profile] = useState(getProfileData);

  const [image, setImage] = useState(
    localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (

    <div className="home">

      {/* SIDEBAR */}
      <Sidebar />


      {/* MAIN */}
      <div className="main">

        <div className="banner">
          <div className="banner-text">
            <h1>My Profile</h1>
            <p>Manage your account settings</p>
          </div>
        </div>


        {/* HEADER */}
        <div className="profile-header">

          <label className="profile-upload">

            <img src={image} className="profile-avatar" alt="profile" />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />

          </label>

          <div>
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <p>{profile.address}</p>
          </div>

        </div>


        {/* CARDS */}
        <div className="profile-grid">

          <div className="profile-card">
            <h3>Personal Information</h3>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.address}</p>
          </div>

          <div className="profile-card">
            <h3>Travel Preferences</h3>
            <p>{profile.budget}</p>
            <p>{profile.days}</p>
            <p>{profile.type.join(", ")}</p>
          </div>

        </div>

        <button
          className="edit-btn"
          onClick={() => navigate("/edit-profile")}
        >
          Edit Profile
        </button>

      </div>

    </div>

  );

}

export default Profile;