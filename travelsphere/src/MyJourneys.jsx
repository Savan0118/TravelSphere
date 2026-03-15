import React from "react";
import "./Home.css";
import "./MyJourneys.css";
import { useNavigate } from "react-router-dom";

function MyJourneys() {

  const navigate = useNavigate();

  return (

    <div className="home">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="sidebar-top">

          <h2 className="logo">
            TravelSphere
          </h2>

          <p className="tagline">
            Discover. Plan. Experience.<br />
            Your gateway to unforgettable journeys
          </p>

          <ul className="menu">

            <li onClick={() => navigate("/home")}>
              <span style={{ fontSize: "18px" }}>🏠</span> Home
            </li>

            <li onClick={() => navigate("/search")}>
              <span style={{ fontSize: "18px" }}>🔍</span> Explore
            </li>

            <li className="active">
              <span style={{ fontSize: "18px" }}>🗺️</span> My Journeys
            </li>

            <li onClick={() => navigate("/budget")}>
              <span style={{ fontSize: "18px" }}>💰</span> Budget Planner
            </li>

            <li onClick={() => navigate("/about")}>
              <span style={{ fontSize: "18px" }}>ℹ️</span> About Us
            </li>

            <li onClick={() => navigate("/weather")}>
              <span style={{ fontSize: "18px" }}>🌦️</span> Weather
            </li>

          </ul>

        </div>

        <div className="logout-container">
          <div className="logout" onClick={() => navigate("/")}>
            <span style={{ fontSize: "20px" }}>⏻</span>
            Log Out
          </div>
        </div>

      </div>


      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner">

          <div className="banner-text">
            <h1>Completed My Adventure</h1>
            <p>Explore the world with ease</p>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="profile"
            alt="User"
          />

        </div>


        {/* CONTENT */}
        <div className="content-area">

          <h2 className="section-title">My Trips</h2>


          {/* CARD 1 */}
          <div className="trip-card">

            <span className="status upcoming">Upcoming</span>

            <img src="/Images/Home_Img.png" alt="Ladakh" />

            <div className="trip-info">

              <h3>Ladakh</h3>
              <p>15 Apr 2024 — 21 Apr 2024</p>
              <p className="location">📍 Leh, Ladakh</p>

              <button className="view-btn">
                View Details
              </button>

            </div>

          </div>


          {/* CARD 2 */}
          <div className="trip-card">

            <span className="status upcoming">Upcoming</span>

            <img src="/Images/Home_Img.png" alt="Varanasi" />

            <div className="trip-info">

              <h3>Varanasi (Kashi)</h3>
              <p>2 May 2024 — 6 May 2024</p>
              <p className="location">📍 Kochi, Kerala</p>

              <button className="view-btn">
                View Details
              </button>

            </div>

          </div>


          {/* CARD 3 */}
          <div className="trip-card">

            <span className="status completed">Completed</span>

            <img src="/Images/Home_Img.png" alt="Taj Mahal" />

            <div className="trip-info">

              <h3>Taj Mahal</h3>
              <p>15 Jan 2025 — 22 Jan 2025</p>
              <p className="location">📍 Agra, Uttar Pradesh</p>

              <button className="view-btn">
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