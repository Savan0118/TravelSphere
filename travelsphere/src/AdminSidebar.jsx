import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

function AdminSidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [isDark, setIsDark] = useState(localStorage.getItem("admin_theme") === "dark");

  const isActive = (path) => location.pathname === path;

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("admin_theme", newTheme ? "dark" : "light");
    window.dispatchEvent(new Event("themeChanged"));
  };

  return (
    <div className="sidebar">

      <div className="sidebar-top">

        <h2 className="logo">TravelSphere</h2>

        <p className="tagline">
          Your best companion to travel around the world
        </p>

        <ul className="menu">

          <li
            className={isActive("/admin") ? "active" : ""}
            onClick={() => navigate("/admin")}
          >
            🏠 Dashboard
          </li>

          <li
            className={isActive("/admin/packages") || isActive("/admin/add") ? "active" : ""}
            onClick={() => navigate("/admin/packages")}
          >
            🔎 Packages
          </li>

          <li
            className={isActive("/admin/bookings") ? "active" : ""}
            onClick={() => navigate("/admin/bookings")}
          >
            💼 Bookings
          </li>

          <li
            className={isActive("/admin/about") ? "active" : ""}
            onClick={() => navigate("/admin/about")}
          >
            ℹ️ About Us
          </li>

          <li
            className={isActive("/admin/profile") ? "active" : ""}
            onClick={() => navigate("/admin/profile")}
          >
            👤 Profile
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
          <span className="emoji-icon">⏻</span>Log Out
        </div>
      </div>

    </div>
  );
}

export default AdminSidebar;
