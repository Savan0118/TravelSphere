import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Power } from "lucide-react";
import "./Home.css";

function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

  const isActive = (path) => location.pathname === path;

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    window.dispatchEvent(new Event("themeChanged"));
  };

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
            <span className="emoji-icon">🏠</span> Home
          </li>

          <li
            className={isActive("/search") ? "active" : ""}
            onClick={() => navigate("/search")}
          >
            <span className="emoji-icon">🔍</span> Explore
          </li>

          <li
            className={isActive("/wishlist") ? "active" : ""}
            onClick={() => navigate("/wishlist")}
          >
            <span className="emoji-icon">❤️</span> Wishlist
          </li>

          <li
            className={isActive("/journeys") ? "active" : ""}
            onClick={() => navigate("/journeys")}
          >
            <span className="emoji-icon">🗺️</span> My Journeys
          </li>

          <li
            className={isActive("/calendar") ? "active" : ""}
            onClick={() => navigate("/calendar")}
          >
            <span className="emoji-icon">📅</span> Calendar
          </li>

          <li
            className={isActive("/budget") ? "active" : ""}
            onClick={() => navigate("/budget")}
          >
            <span className="emoji-icon">💰</span> Budget Planner
          </li>

          <li
            className={isActive("/about") ? "active" : ""}
            onClick={() => navigate("/about")}
          >
            <span className="emoji-icon">ℹ️</span> About Us
          </li>

          <li
            className={isActive("/weather") ? "active" : ""}
            onClick={() => navigate("/weather")}
          >
            <span className="emoji-icon">🌦️</span> Weather
          </li>

        </ul>

      </div>

      <div className="logout-container">
        <ul className="menu" style={{ marginBottom: "10px" }}>
          <li onClick={toggleTheme}>
            <span className="emoji-icon">{isDark ? "☀️" : "🌙"}</span> {isDark ? "Light Mode" : "Dark Mode"}
          </li>
        </ul>
        <div className="logout" onClick={() => navigate("/")}>
          <span className="emoji-icon"><Power size={18} /></span>Log Out
        </div>
      </div>

    </div>
  );
}

export default Sidebar;