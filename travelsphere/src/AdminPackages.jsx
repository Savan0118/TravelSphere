import React, { useState, useEffect } from "react";
import "./Home.css";
import "./AdminPackages.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminPackages() {

  const navigate = useNavigate();

  const [adminImage, setAdminImage] = useState(
    localStorage.getItem("adminProfileImage") || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  );

  useEffect(() => {
    const handleProfileUpdate = () => {
      setAdminImage(localStorage.getItem("adminProfileImage") || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png");
    };
    window.addEventListener("adminProfileUpdated", handleProfileUpdate);
    return () => window.removeEventListener("adminProfileUpdated", handleProfileUpdate);
  }, []);

  return (

    <div className="home">

      {/* SIDEBAR */}
      <AdminSidebar />


      {/* MAIN AREA */}
      <div className="main">

        <div className="banner">

          <div className="banner-text">
            <h1>Plan your packages for the world</h1>
            <p>Welcome Back! Admin</p>
          </div>

          <img
            src={adminImage}
            className="profile"
            alt="admin"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/profile")}
          />

        </div>

        <div className="content-area">
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

    </div>

  );
}

export default AdminPackages;