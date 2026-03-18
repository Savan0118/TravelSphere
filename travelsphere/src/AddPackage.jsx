import React from "react";
import "./AddPackage.css";
import { useNavigate } from "react-router-dom";

function AddPackage() {

  const navigate = useNavigate();

  return (

    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div>
          <h2>TravelSphere</h2>

          <ul className="menu">
            <li onClick={() => navigate("/admin")}>🏠 Dashboard</li>
            <li onClick={() => navigate("/admin/packages")}>🔎 Packages</li>
            <li onClick={() => navigate("/admin/bookings")}>💼 Bookings</li>
            <li onClick={() => navigate("/admin/about")}>ℹ️ About</li>
          </ul>
        </div>

        <div className="logout" onClick={() => navigate("/")}>
          ⏻ Logout
        </div>

      </div>


      {/* MAIN */}
      <div className="admin-main">

        {/* BANNER */}
        <div className="banner">
          <div>
            <h1>Create Travel Package</h1>
            <p>Design new travel experience</p>
          </div>
        </div>


        <div className="form-container">

          <h2>Create New Package</h2>

          <div className="form-grid">

            {/* LEFT COLUMN */}
            <div className="form-card">

              <label>Package Name</label>
              <input type="text" />

              <label>Location</label>
              <input type="text" placeholder="Enter location" />

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

  );
}

export default AddPackage;