import React, { useState } from "react";
import "./Home.css";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (

    <div className="home">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="sidebar-top">

          <h2 className="logo">TravelSphere</h2>

          <p className="tagline">
            Discover. Plan. Experience.<br />
            Your gateway to unforgettable journeys
          </p>

          <ul className="menu">

            <li onClick={() => navigate("/home")}>
              <span style={{ fontSize: "18px" }}>🏠</span> Home
            </li>

            <li onClick={() => navigate("/search")}>
              <span style={{ fontSize: "18px" }}>🔍</span> Explore
            </li>

            <li onClick={() => navigate("/journeys")}>
              <span style={{ fontSize: "18px" }}>🗺️</span> My Journeys
            </li>

            <li onClick={() => navigate("/budget")}>
              <span style={{ fontSize: "18px" }}>💰</span> Budget Planner
            </li>

            <li onClick={() => navigate("/about")}>
              <span style={{ fontSize: "18px" }}>ℹ️</span> About Us
            </li>

            <li onClick={() => navigate("/weather")}>
              <span style={{ fontSize: "18px" }}>🌦️</span> Weather
            </li>

          </ul>

        </div>

        <div className="logout-container">
          <div className="logout" onClick={() => navigate("/")}>
            ⏻ Log Out
          </div>
        </div>

      </div>


      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner profile-banner">

          <div className="banner-text">
            <h1>My Profile</h1>
            <p>Manage your account settings</p>
          </div>

          {/* ❌ REMOVED TOP PROFILE ICON */}

        </div>


        {/* PROFILE HEADER */}
        <div className="profile-header">

          {/* ✅ CLICKABLE IMAGE */}
          <label className="profile-upload">

            <img
              src={image}
              className="profile-avatar"
              alt="profile"
            />

            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
              hidden
            />

          </label>

          <div>
            <h2>Harish Patel</h2>
            <p>harishpatel123@gmail.com</p>
            <p>Gujarat, India</p>
          </div>

        </div>


        {/* CONTENT */}
        <div className="profile-grid">

          <div className="profile-card">
            <h3>Personal Information</h3>
            <p>Harish Patel</p>
            <p>harishpatel@gmail.com</p>
            <p>+91 12345 67890</p>
            <p>Rajkot, Gujarat</p>
          </div>

          <div className="profile-card">
            <h3>Travel Preferences</h3>
            <p>Mid Range</p>
            <p>4 - 7 days</p>
            <p>Nature, Culture, Adventure</p>
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