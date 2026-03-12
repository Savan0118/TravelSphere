import React from "react";
import "./Home.css";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate();

  return (
    <div className="home">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="sidebar-top">

          <h2 className="logo">TravelSphere</h2>

          <p className="tagline">
            Your best companion to travel around the world
          </p>

          <ul className="menu">

            <li onClick={() => navigate("/home")}>
              <span style={{ fontSize: "18px" }}>🏠</span> Home
            </li>

            <li onClick={() => navigate("/search")}>
              <span style={{ fontSize: "18px" }}>🔍</span> Explore
            </li>

            <li onClick={() => navigate("/journeys")}>
              <span style={{ fontSize: '18px' }}>🗺️</span> My Journeys
            </li>

            <li onClick={() => navigate("/budget")}>
              <span style={{ fontSize: "18px" }}>💰</span> Budget Planner
            </li>

            <li className="active">
              <span style={{ fontSize: '18px' }}>ℹ️</span> About Us
            </li>

            <li onClick={() => navigate("/weather")}>
                <span style={{ fontSize: "18px" }}>🌦️</span> Weather
            </li>

          </ul>

        </div>

        <div className="logout-container">
          <div className="logout" onClick={() => navigate("/")}>
            ⏻ Log Out
          </div>
        </div>

      </div>


      {/* MAIN */}
      <div className="main about-scroll">

        {/* BANNER */}
        <div className="banner about-banner">

          <div className="banner-text">
            <h1>About Us</h1>
            <p>Explore what we do for you</p>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="profile"
            alt="profile"
          />

        </div>


        {/* CONTENT */}
        <div className="content-area">

          {/* ABOUT CARD */}
          <div className="about-card">

            <p>
              <b>TravelSphere</b> was created with a simple idea — travel should feel exciting,
              not overwhelming. We believe planning a trip should be as enjoyable as the journey itself.
              From discovering beautiful destinations to organizing stays and bookings,
              our platform brings everything together in one place.
              <i> TravelSphere</i> helps travelers explore confidently,
              plan easily, and create unforgettable memories without stress.
            </p>

          </div>


          <div className="about-grid">

            {/* PRIVACY */}
            <div className="about-box">

              <h3>Privacy Policy</h3>

              <p>
                <b>TravelSphere</b> collects basic information such as your name,
                email, phone number and booking details to manage your travel experience.
                Your data is used only for account and booking purposes.
                We do not sell or share personal information with third parties
                except when required for trip coordination.
              </p>

            </div>


            {/* CONTACT */}
            <div className="about-box">

              <h3>Contact</h3>

              <p>
                support@travelsphere.com<br />
                +91 98765 43210<br />
                Ahmedabad, India
              </p>

              <h3 style={{marginTop:"20px"}}>Quick Links</h3>

              <p>
                Privacy Policy | Terms & Conditions<br />
                © 2026 TravelSphere. All rights reserved.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;