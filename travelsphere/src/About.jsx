import React from "react";
import "./Home.css";
import "./About.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function About() {

  const navigate = useNavigate();

  const profileImg =
    localStorage.getItem("profileImage") ||
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  return (
    <div className="home">

      <Sidebar />

      <div className="main about-scroll">

        {/* BANNER */}
        <div className="banner about-banner">
          <div className="banner-text">
            <h1>About TravelSphere</h1>
            <p>Your smart companion for planning unforgettable journeys</p>
          </div>

          <img
            src={profileImg}
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="content-area">

          {/* ABOUT */}
          <div className="about-card">
            <p>
              <b>TravelSphere</b> is designed to simplify travel planning by bringing
              everything into one intelligent platform. Whether you're planning a
              solo adventure, a family vacation, or a group trip, we help you make
              better decisions with ease.
            </p>

            <p>
              From exploring destinations to managing budgets, tracking journeys,
              and organizing travel details, <i>TravelSphere</i> ensures that every
              step of your journey is smooth, efficient, and enjoyable.
            </p>
          </div>

          {/* MISSION + VISION */}
          <div className="about-grid">

            <div className="about-box">
              <h3>Our Mission</h3>
              <p>
                To make travel planning effortless and accessible by providing
                users with smart tools, real-time insights, and a seamless
                experience from start to finish.
              </p>

              <h3 style={{ marginTop: "20px" }}>Our Vision</h3>
              <p>
                To become a one-stop travel ecosystem where users can discover,
                plan, and manage their trips with complete confidence.
              </p>
            </div>

            <div className="about-box">
              <h3>What We Offer</h3>
              <ul>
                <li>🌍 Smart destination exploration</li>
                <li>📊 Budget planning & cost estimation</li>
                <li>🧳 Journey tracking & history</li>
                <li>🏨 Hotel and travel insights</li>
                <li>📅 Organized trip management</li>
              </ul>
            </div>

          </div>

          {/* PRIVACY + CONTACT */}
          <div className="about-grid">

            <div className="about-box">
              <h3>Privacy Policy</h3>
              <p>
                We collect only essential information such as your name, email,
                and travel preferences to enhance your experience.
                Your data is securely stored and never sold to third parties.
              </p>

              <p>
                All information is used strictly for improving services and
                assisting in your travel planning process.
              </p>
            </div>

            <div className="about-box">
              <h3>Contact Us</h3>

              <p>
                📧 support@travelsphere.com <br />
                📞 +91 98765 43210 <br />
                📍 Rajkot, India
              </p>

              <h3 style={{ marginTop: "20px" }}>Our Team</h3>

              <p>
                👤 tanisharathod15@gmail.com <br />
                👤 savanpatel@gmail.com <br />
                👤 vivekhadiya@gmail.com
              </p>

              <h3 style={{ marginTop: "20px" }}>Quick Links</h3>

              <p>
                Privacy Policy | Terms & Conditions <br />
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