import React from "react";
import "./AdminAbout.css";
import { useNavigate } from "react-router-dom";

function AdminAbout() {

  const navigate = useNavigate();

  return (

    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div>

          <h2 className="logo">TravelSphere</h2>

          <p className="tagline">
            Your best companion to travel around the world
          </p>

          <ul className="menu">

            <li onClick={() => navigate("/admin")}>🏠 Dashboard</li>

            <li onClick={() => navigate("/admin/packages")}>🔎 Packages</li>

            <li onClick={() => navigate("/admin/bookings")}>💼 Bookings</li>

            <li className="active">ℹ️ About Us</li>

          </ul>

        </div>

        <div className="logout" onClick={() => navigate("/")}>
          ⏻ Log Out
        </div>

      </div>


      {/* MAIN */}
      <div className="admin-main">

        {/* BANNER */}
        <div className="banner">

          <div className="banner-text">
            <h1>About Us</h1>
            <p>Explore what we do for you</p>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            className="profile"
            alt="admin"
          />

        </div>


        {/* CONTENT */}
        <div className="about-grid">

          {/* STORY */}
          <div className="about-card full">

            <p>
              <strong>TravelSphere</strong> was created with a simple idea —
              travel should feel exciting, not overwhelming. We believe planning
              a trip should be as enjoyable as the journey itself. From discovering
              beautiful destinations to organizing stays and bookings, our platform
              brings everything together in one place.
            </p>

          </div>


          {/* PRIVACY */}
          <div className="about-card">

            <h3>Privacy Policy</h3>

            <p>
              TravelSphere collects basic information such as your name, email,
              phone number and booking details to manage travel requests and
              improve experience. Your data is used only for account and booking
              purposes.
            </p>

          </div>


          {/* CONTACT */}
          <div className="about-card contact">

            <h3>Contact</h3>
            <p>support@travelsphere.com</p>
            <p>+91 98765 43210</p>
            <p>Ahmedabad, India</p>

            <h3 className="mt">Quick Links</h3>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminAbout;