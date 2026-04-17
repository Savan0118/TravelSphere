import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Bell } from "lucide-react";

function Profile() {

  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("notifications") || "[]"));
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setNotifications(JSON.parse(localStorage.getItem("notifications") || "[]"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const markAllRead = () => {
    localStorage.setItem("notifications", "[]");
    setNotifications([]);
    setShowDropdown(false);
  };

  const getProfileData = () => {

    const saved = localStorage.getItem("profileData");

    if (saved) {
      const data = JSON.parse(saved);

      return {
        name: data.name || "Harish Patel",
        email: data.email || "harishpatel123@gmail.com",
        phone: data.phone || "+91 12345 67890",
        address: data.address || "Rajkot, Gujarat",
        budget: data.budget || "Mid Range",
        days: data.days || "4 - 7 days",
        type: data.type && data.type.length
          ? data.type
          : ["Nature", "Culture", "Adventure"]
      };
    }

    return {
      name: "Harish Patel",
      email: "harishpatel123@gmail.com",
      phone: "+91 12345 67890",
      address: "Rajkot, Gujarat",
      budget: "Mid Range",
      days: "4 - 7 days",
      type: ["Nature", "Culture", "Adventure"]
    };
  };

  // ✅ Initialize state directly (NO useEffect)
  const [profile] = useState(getProfileData);

  const [image, setImage] = useState(
    localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (

    <div className="home">

      {/* SIDEBAR */}
      <Sidebar />


      {/* MAIN */}
      <div className="main">

        <div className="banner">
          <div className="banner-text">
            <h1>My Profile</h1>
            <p>Manage your account settings</p>
          </div>

          <div style={{ position: 'absolute', right: '30px', top: '30px', display: 'flex', alignItems: 'center', gap: '20px', zIndex: 2 }}>
            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowDropdown(!showDropdown)}>
              <Bell size={28} color="var(--text-main)" />
              {notifications.length > 0 && (
                <span style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>
                  {notifications.length}
                </span>
              )}
              {showDropdown && (
                <div className="glass" style={{ position: 'absolute', top: '40px', right: 0, width: '250px', padding: '15px', borderRadius: '10px', background: 'var(--bg-dropdown)', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 10 }}>
                  <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-main)' }}>Notifications</h4>
                  {notifications.length === 0 ? <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>No new notifications.</p> :
                    notifications.map((n, i) => (
                      <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--border-color)', fontSize: '12px', color: 'var(--text-main)' }}>{n.msg}</div>
                    ))
                  }
                  {notifications.length > 0 && <button onClick={markAllRead} style={{ marginTop: '10px', width: '100%', padding: '5px', background: '#2a8153', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mark all as read</button>}
                </div>
              )}
            </div>
            <img src={image} className="profile" style={{ position: 'static', margin: 0 }} onClick={() => navigate("/profile")} />
          </div>
        </div>


        {/* HEADER */}
        <div className="profile-header">

          <label className="profile-upload">

            <img src={image} className="profile-avatar" alt="profile" />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />

          </label>

          <div>
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <p>{profile.address}</p>
          </div>

        </div>


        {/* CARDS */}
        <div className="profile-grid">

          <div className="profile-card">
            <h3>Personal Information</h3>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.address}</p>
          </div>

          <div className="profile-card">
            <h3>Travel Preferences</h3>
            <p>{profile.budget}</p>
            <p>{profile.days}</p>
            <p>{profile.type.join(", ")}</p>
          </div>

        </div>

        <button
          className="edit-btn"
          onClick={() => navigate("/edit-profile")}
        >
          Edit Profile
        </button>

      </div>

    </div>

  );

}

export default Profile;