import React, { useState } from "react";
import "./Home.css";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    budget: "",
    days: "",
    type: []
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckbox = (value) => {
    let updated = [...form.type];

    if (updated.includes(value)) {
      updated = updated.filter(item => item !== value);
    } else {
      updated.push(value);
    }

    setForm({ ...form, type: updated });
  };

  const handleSave = () => {
    alert("Profile Updated ✅");
    navigate("/profile");
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
            <li onClick={() => navigate("/home")}>🏠 Home</li>
            <li onClick={() => navigate("/search")}>🔍 Explore</li>
            <li onClick={() => navigate("/journeys")}>🗺️ My Journeys</li>
            <li onClick={() => navigate("/budget")}>💰 Budget Planner</li>
            <li onClick={() => navigate("/about")}>ℹ️ About Us</li>
            <li onClick={() => navigate("/weather")}>🌦️ Weather</li>
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

        <div className="banner profile-banner">
          <div className="banner-text">
            <h1>Edit Profile</h1>
            <p>Update your personal details</p>
          </div>
        </div>


        <div className="content-area">

          <div className="edit-card">

            {/* INPUTS */}

            <div className="form-row">
              <label>Name :</label>
              <input name="name" onChange={handleChange} />
            </div>

            <div className="form-row">
              <label>Email :</label>
              <input name="email" onChange={handleChange} />
            </div>

            <div className="form-row">
              <label>Phone no :</label>
              <input name="phone" onChange={handleChange} />
            </div>

            <div className="form-row">
              <label>Address :</label>
              <textarea name="address" onChange={handleChange}></textarea>
            </div>


            {/* BUDGET */}
            <div className="form-row">
              <label>Expenses :</label>

              <div className="radio-group">
                <label><input type="radio" name="budget" value="Low" onChange={handleChange} /> Low</label>
                <label><input type="radio" name="budget" value="Medium" onChange={handleChange} /> Medium</label>
                <label><input type="radio" name="budget" value="High" onChange={handleChange} /> High</label>
              </div>

            </div>


            {/* DAYS */}
            <div className="form-row">
              <label>Preferred days :</label>
              <input name="days" onChange={handleChange} />
            </div>


            {/* TYPE */}
            <div className="form-row">
              <label>Type of destination :</label>

              <div className="checkbox-group">

                <label><input type="checkbox" onChange={() => handleCheckbox("Nature")} /> Nature</label>
                <label><input type="checkbox" onChange={() => handleCheckbox("Historical")} /> Historical</label>
                <label><input type="checkbox" onChange={() => handleCheckbox("Night city")} /> Night city</label>
                <label><input type="checkbox" onChange={() => handleCheckbox("Adventure")} /> Adventure</label>
                <label><input type="checkbox" onChange={() => handleCheckbox("Cultural")} /> Cultural</label>
                <label><input type="checkbox" onChange={() => handleCheckbox("Beaches")} /> Beaches</label>

              </div>

            </div>


            <button className="save-btn" onClick={handleSave}>
              Save
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default EditProfile;