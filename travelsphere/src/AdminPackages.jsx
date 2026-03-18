import React from "react";
import "./AdminPackages.css";
import { useNavigate } from "react-router-dom";

function AdminPackages() {

  const navigate = useNavigate();

  return (

    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="sidebar-top">

          <h2 className="logo">TravelSphere</h2>

          <p className="tagline">
            Your best companion to travel around the world
          </p>

          <ul className="menu">

            <li onClick={() => navigate("/admin")}>
              🏠 Dashboard
            </li>

            <li className="active">
              🔎 Packages
            </li>

            <li onClick={() => navigate("/admin/bookings")}>
              💼 Bookings
            </li>

            <li onClick={() => navigate("/admin/about")}>
              ℹ️ About Us
            </li>

          </ul>

        </div>

        <div className="logout-container">
          <div className="logout" onClick={() => navigate("/")}>
            ⏻ Log Out
          </div>
        </div>

      </div>


      {/* MAIN AREA */}
      <div className="admin-main">

        <div className="banner admin-banner">

        <div className="banner-text">
            <h1>Plan your packages for the world</h1>
            <p>Welcome Back! Admin</p>
        </div>

        <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            className="profile"
        />

        </div>

        <div className="admin-header">
          <h1>Manage Packages</h1>

          <button
            className="add-btn"
            onClick={() => navigate("/admin/add")}
          >
            Add New Package
          </button>
        </div>


        {/* TABLE */}
        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Package Name</th>
                <th>Location</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Ladakh Adventure Tour</td>
                <td>Ladakh</td>
                <td>7 Days</td>
                <td>₹ 3,50,000</td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>

              <tr>
                <td>Manali Trip</td>
                <td>Himachal</td>
                <td>5 Days</td>
                <td>₹ 1,20,000</td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>

              <tr>
                <td>Kerala Tour</td>
                <td>Kerala</td>
                <td>6 Days</td>
                <td>₹ 90,000</td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default AdminPackages;