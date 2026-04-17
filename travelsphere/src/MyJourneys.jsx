import React, { useState, useEffect } from "react";
import "./Home.css";
import "./MyJourneys.css";
import Sidebar from "./Sidebar";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MyJourneys() {

  const navigate = useNavigate();

  const profileImg = localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
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
            <img src={profileImg} className="profile" style={{ position: 'static', margin: 0 }} onClick={() => navigate("/profile")} />
          </div>
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