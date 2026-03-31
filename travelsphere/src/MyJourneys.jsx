import React from "react";
import "./Home.css";
import "./MyJourneys.css";
import Sidebar from "./Sidebar";   // ✅ IMPORT
import { useNavigate } from "react-router-dom";

function MyJourneys() {

  const navigate = useNavigate();

  const profileImg = localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  return (

    <div className="home">

      {/* ✅ SIDEBAR COMPONENT */}
      <Sidebar />

      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner">
          <div className="banner-text">
            <h1>Completed My Adventure</h1>
            <p>Explore the world with ease</p>
          </div>
          <img
            src={profileImg}
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* CONTENT */}
        <div className="content-area">

          <h2 className="section-title" style={{ marginBottom: "25px" }}>My Trips</h2>

          {/* CARD */}
          <div className="trip-card premium">

            <div className="trip-image">
              <img src="Images/ladakh.png" alt="Ladakh" />
            </div>

            <div className="trip-info">

              <div className="trip-top">
                <h3>Ladakh</h3>
                <span className="status upcoming">Upcoming</span>
              </div>

              <p className="date">15 Apr 2024 — 21 Apr 2024</p>
              <p className="location">📍 Leh, Ladakh</p>

              <div className="trip-meta">
                <span className="meta">👨‍👩‍👧‍👦 Family Trip</span>
                <span className="meta">👥 5 Travellers</span>
              </div>

              <button
                className="view-btn"
                onClick={() => navigate("/trip-details/ladakh")}
              >
                View Details
              </button>

            </div>

          </div>

          {/* CARD */}
          <div className="trip-card premium">

            <div className="trip-image">
              <img src="Images/varanasi.png" alt="Varanasi" />
            </div>

            <div className="trip-info">

              <div className="trip-top">
                <h3>Varanasi (Kashi)</h3>
                <span className="status upcoming">Upcoming</span>
              </div>

              <p className="date">2 May 2024 — 6 May 2024</p>
              <p className="location">📍 Kochi, Kerala</p>

              <div className="trip-meta">
                <span className="meta">👬 Friends Trip</span>
                <span className="meta">👥 4 Travellers</span>
              </div>

              <button
                className="view-btn"
                onClick={() => navigate("/trip-details/varanasi")}
              >
                View Details
              </button>

            </div>

          </div>

          {/* CARD */}
          <div className="trip-card premium">

            <div className="trip-image">
              <img src="Images/taj_mahal.jpeg" alt="Taj Mahal" />
            </div>

            <div className="trip-info">

              <div className="trip-top">
                <h3>Taj Mahal</h3>
                <span className="status completed">Completed</span>
              </div>

              <p className="date">15 Jan 2025 — 22 Jan 2025</p>
              <p className="location">📍 Agra, Uttar Pradesh</p>

              <div className="trip-meta">
                <span className="meta">🧍 Solo Trip</span>
                <span className="meta">👥 1 Traveller</span>
              </div>

              <button
                className="view-btn"
                onClick={() => navigate("/trip-details/taj")}
              >
                View Details
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default MyJourneys;