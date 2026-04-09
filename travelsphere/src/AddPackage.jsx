import React, { useState, useEffect } from "react";
import "./Home.css";
import "./AddPackage.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AddPackage() {

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


      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner">
          <div className="banner-text">
            <h1>Create Travel Package</h1>
            <p>Design new travel experience</p>
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
          <div className="form-container">

            <h2>Create New Package</h2>

            <div className="form-grid">

              {/* LEFT COLUMN */}
              <div className="form-card">

                <label>Package Name</label>
                <input type="text" />

                <label>Location</label>
                <input type="text" placeholder="Enter location" />

                <label>Type of Destination</label>
                <select style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc", outline: "none", fontSize: "14px" }}>
                  <option value="">Select Type</option>
                  <option value="Scenic Villages">Scenic Villages</option>
                  <option value="Coastal Beaches">Coastal Beaches</option>
                  <option value="Mountain Escapes">Mountain Escapes</option>
                  <option value="Spiritual Places">Spiritual Places</option>
                  <option value="Explore More">Explore More</option>
                </select>

                <label>Package Description</label>
                <textarea rows="3"></textarea>

                <label>Best Season</label>
                <input type="text" placeholder="Example: Oct – Feb" />

                {/* ⭐ ITINERARY SECTION */}
                <label>Day-wise Itinerary</label>

                <div className="itinerary-box">
                  <input placeholder="Day 1 details" />
                  <input placeholder="Day 2 details" />
                  <input placeholder="Day 3 details" />
                  <input placeholder="Day 4 details" />
                </div>

                {/* ⭐ ADVENTURE SECTION */}
                <label>Adventures / Extra Activities</label>

                <div className="activity-box">
                  <input placeholder="Example: River Rafting" />
                  <input placeholder="Example: Paragliding" />
                  <input placeholder="Example: Trekking" />
                </div>

                <label>Upload Package Image</label>
                <input type="file" />

              </div>


              {/* RIGHT COLUMN */}
              <div className="form-card">

                <label>Duration (Days)</label>
                <input type="number" />

                <label>Price</label>
                <input type="number" />

                <label>Child Price</label>
                <input type="number" />

                <label>Hotel Name</label>
                <input type="text" />

                <label>Room Type</label>
                <input type="text" />

                <label>Meals Included</label>
                <input type="text" placeholder="Example: Breakfast + Dinner" />

                <label>Available Seats</label>
                <input type="number" placeholder="Example: 10" />

                <div className="btn-row">
                  <button className="save" onClick={() => navigate("/admin/packages")} >Save Package</button>
                  <button
                    className="cancel"
                    onClick={() => navigate("/admin/packages")}
                  >
                    Cancel
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

    </div>

  );
}

export default AddPackage;