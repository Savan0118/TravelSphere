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
            <span style={{ fontSize: '18px' }}>🏠</span> Home
          </li>

          <li
            className={isActive("/search") ? "active" : ""}
            onClick={() => navigate("/search")}
          >
            <span style={{ fontSize: '18px' }}>🔍</span> Explore
          </li>

          <li
            className={isActive("/journeys") ? "active" : ""}
            onClick={() => navigate("/journeys")}
          >
            <span style={{ fontSize: '18px' }}>🗺️</span> My Journeys
          </li>

          <li
            className={isActive("/budget") ? "active" : ""}
            onClick={() => navigate("/budget")}
          >
            <span style={{ fontSize: '18px' }}>💰</span> Budget Planner
          </li>

          <li
            className={isActive("/about") ? "active" : ""}
            onClick={() => navigate("/about")}
          >
            <span style={{ fontSize: '18px' }}>ℹ️</span> About Us
          </li>

          <li
            className={isActive("/weather") ? "active" : ""}
            onClick={() => navigate("/weather")}
          >
            <span style={{ fontSize: '18px' }}>🌦️</span> Weather
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