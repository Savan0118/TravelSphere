import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">

      <div className="sidebar-top">

        <h2 className="logo">TravelSphere</h2>

        <p className="tagline">
          Discover. Plan. Experience.<br />
          Your gateway to unforgettable journeys
        </p>

        <ul className="menu">

          <li
            className={isActive("/home") ? "active" : ""}
            onClick={() => navigate("/home")}
          >
            🏠 Home
          </li>

          <li
            className={isActive("/search") ? "active" : ""}
            onClick={() => navigate("/search")}
          >
            🔍 Explore
          </li>

          <li
            className={isActive("/journeys") ? "active" : ""}
            onClick={() => navigate("/journeys")}
          >
            🗺️ My Journeys
          </li>

          <li
            className={isActive("/budget") ? "active" : ""}
            onClick={() => navigate("/budget")}
          >
            💰 Budget Planner
          </li>

          <li
            className={isActive("/about") ? "active" : ""}
            onClick={() => navigate("/about")}
          >
            ℹ️ About Us
          </li>

          <li
            className={isActive("/weather") ? "active" : ""}
            onClick={() => navigate("/weather")}
          >
            🌦️ Weather
          </li>

        </ul>

      </div>

      <div className="logout-container">
        <div className="logout" onClick={() => navigate("/")}>
          ⏻ Log Out
        </div>
      </div>

    </div>
  );
}

export default Sidebar;