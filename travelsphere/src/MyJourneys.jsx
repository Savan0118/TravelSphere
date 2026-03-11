import React from "react";
import "./Home.css";
import "./MyJourneys.css";
import { useNavigate } from "react-router-dom";

function MyJourneys() {

  const navigate = useNavigate();

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

            <li
              className="active"
              onClick={() => navigate("/journeys")}
            >
              <span style={{ fontSize: "18px" }}>🗺️</span> My Journeys
            </li>

            <li onClick={() => navigate("/budget")}>
              <span style={{ fontSize: "18px" }}>💰</span> Budget Planner
            </li>

            <li onClick={() => navigate("/weather")}>
              <span style={{ fontSize: "18px" }}>🌦️</span> Weather
            </li>

          </ul>

        </div>

        <div className="logout-container">
          <div
            className="logout"
            onClick={() => navigate("/")}
          >
            <span style={{ fontSize: "20px" }}>⏻</span>
            Sign Out
          </div>
        </div>

      </div>


      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner journeys-banner">

          <div className="banner-text">
            <h1>Your Travelled Destinations OR Dream Completed Trips</h1>
            <p>Track and manage all your saved trips in one place</p>
          </div>

        </div>


        {/* CONTENT */}
        <div className="content-area">

          <h2 className="journeys-title">Saved Trips</h2>

          <div className="journey-list">

            <div className="journey-card">
              <h3>Ladakh Adventure</h3>
              <p>7 Days Himalayan Expedition</p>
              <span>Budget ₹70,000</span>
            </div>

            <div className="journey-card">
              <h3>Varanasi Spiritual Tour</h3>
              <p>5 Days Cultural Experience</p>
              <span>Budget ₹14,000</span>
            </div>

            <div className="journey-card">
              <h3>Taj Mahal Visit</h3>
              <p>2 Days Heritage Trip</p>
              <span>Budget ₹2,500</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyJourneys;