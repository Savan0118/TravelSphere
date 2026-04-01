import React, { useState, useEffect } from "react";
import "./Home.css";
import "./AdminAbout.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminAbout() {

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
            <h1>About Us</h1>
            <p>Explore what we do for you</p>
          </div>

          <img
            src={adminImage}
            className="profile"
            alt="admin"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/profile")}
          />

        </div>


        {/* CONTENT */}
        <div className="content-area">
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

    </div>

  );
}

export default AdminAbout;