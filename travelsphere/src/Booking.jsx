import React, { useState } from "react";
import "./Home.css";
import "./Booking.css";
import { useNavigate, useParams } from "react-router-dom";

function Booking() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    travellers: "",
    date: "",
    special: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert("Booking Confirmed ✅");
    navigate("/journeys");
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

        <div className="banner booking-banner">

          <div className="banner-text">
            <h1>Complete Your Booking</h1>
            <p>Secure your travel experience in just a few steps</p>
          </div>

        </div>


        <div className="content-area booking-layout">

          {/* LEFT FORM */}
          <div className="booking-left">

            <div className="booking-card">

              <h2>Traveller Information</h2>

              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                onChange={handleChange}
              />

              <input
                type="number"
                placeholder="Number of Travellers"
                name="travellers"
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                onChange={handleChange}
              />

              <textarea
                placeholder="Special Requests"
                name="special"
                onChange={handleChange}
              ></textarea>

              <button
                className="confirm-btn"
                onClick={handleSubmit}
              >
                Confirm Booking
              </button>

            </div>

          </div>


          {/* RIGHT SUMMARY */}
          <div className="booking-right">

            <div className="summary-card">

              <h3>Booking Summary</h3>

              <p><strong>Package :</strong> {id}</p>
              <p><strong>Duration :</strong> 5 Days</p>
              <p><strong>Hotel :</strong> Premium Stay</p>
              <p><strong>Meals :</strong> Breakfast Included</p>

              <div className="price-box">
                ₹ 25,000
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Booking;