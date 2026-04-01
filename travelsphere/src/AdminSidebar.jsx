import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

function AdminSidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
        <div className="logout" onClick={() => navigate("/")}>
          ⏻ Log Out
        </div>
      </div>

    </div>
  );
}

export default AdminSidebar;
