import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Heart, Bell } from "lucide-react";

function Wishlist() {
  const navigate = useNavigate();
  const profileImg = localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist") || "[]"));
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("notifications") || "[]"));
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setNotifications(JSON.parse(localStorage.getItem("notifications") || "[]"));
      setWishlist(JSON.parse(localStorage.getItem("wishlist") || "[]"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleWishlist = (dest) => {
    let newList;
    if (wishlist.some(item => item.id === dest.id)) newList = wishlist.filter(item => item.id !== dest.id);
    else newList = [...wishlist, dest];
    setWishlist(newList);
    localStorage.setItem("wishlist", JSON.stringify(newList));
  };

  const markAllRead = () => {
    localStorage.setItem("notifications", "[]");
    setNotifications([]);
    setShowDropdown(false);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="main">
        <div className="banner">
          <div className="banner-text">
            <h1>Your Saved Destinations</h1>
            <p>Keep track of the places you love and plan your next adventure.</p>
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

        <div className="content-area">
          <div className="destinations-header">
            <h2>My Wishlist ({wishlist.length})</h2>
          </div>

          {wishlist.length === 0 ? (
            <p style={{ color: "var(--text-muted)", fontSize: "16px", marginTop: "20px" }}>Your wishlist is empty. Start exploring and save your favorite destinations!</p>
          ) : (
            <div className="cards" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {wishlist.map((dest) => {
                const reviews = JSON.parse(localStorage.getItem(`reviews_${dest.id}`) || "[]");
                const avgRating = reviews.length ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : null;

                return (
                  <div className="card" key={dest.id} style={{ minWidth: '300px', flex: '1 1 300px', maxWidth: '350px' }}>
                    <div className="card-img-container" style={{ position: 'relative' }}>
                      <img src={dest.img} alt={dest.title} />
                    </div>
                    <div className="card-info">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ paddingRight: '10px' }}>
                          <h3>{dest.title}</h3>
                          {avgRating && <span style={{ fontSize: '12px', fontWeight: 'bold', background: '#ffc107', padding: '2px 6px', borderRadius: '10px', color: '#000', display: 'inline-block', marginTop: '5px' }}>⭐ {avgRating}</span>}
                        </div>
                        <Heart 
                          onClick={() => toggleWishlist(dest)}
                          size={24} 
                          style={{ cursor: 'pointer', fill: '#e74c3c', color: '#e74c3c', transition: '0.2s', flexShrink: 0 }} 
                        />
                      </div>
                      <p className="location">{dest.location}</p>
                      <p className="desc">{dest.desc}</p>
                      <button onClick={() => navigate(`/description/${dest.id}`)}>View</button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
