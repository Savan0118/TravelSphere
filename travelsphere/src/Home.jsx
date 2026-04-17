import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Heart, Bell } from "lucide-react";

const trendingDestinations = [
  { id: "amberfort", title: "Amber Fort", location: "Jaipur, Rajasthan", desc: "Experience royal heritage and timeless architecture in Rajasthan.", img: "Images/amber_fort.png" },
  { id: "gateway", title: "Gateway of India", location: "Mumbai, Maharashtra", desc: "Explore Mumbai’s iconic monument beside the Arabian Sea.", img: "Images/gateway_of_India.png" },
  { id: "kashmir", title: "Kashmir", location: "Jammu & Kashmir", desc: "Discover paradise on earth with mountains, lakes, and valleys.", img: "Images/kashmir.png" }
];

function Home() {
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
            <h1>Explore the World Without Limits</h1>
            <p>Find destinations, build your perfect trip, and create lifelong memories with TravelSphere</p>
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
            <h2>Trending Destinations</h2>
            <div className="view-all">View All <span>»»</span></div>
          </div>

          <div className="cards">
            {trendingDestinations.map((dest) => {
              const isSaved = wishlist.some(item => item.id === dest.id);
              
              // Get average rating if exists
              const reviews = JSON.parse(localStorage.getItem(`reviews_${dest.id}`) || "[]");
              const avgRating = reviews.length ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : null;

              return (
                <div className="card" key={dest.id}>
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
                        style={{ cursor: 'pointer', fill: isSaved ? '#e74c3c' : 'transparent', color: isSaved ? '#e74c3c' : 'var(--text-muted)', transition: '0.2s', flexShrink: 0 }} 
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

          <h2>Featured Packages</h2>
          <div className="package">
            <img src="Images/ladakh.png" alt="Ladakh" />
            <div className="package-info">
              <h3>Ladakh Expedition</h3>
              <p>Experience breathtaking landscapes and unforgettable adventures in Ladakh.</p>
              <div className="package-bottom">
                <div className="price-tag">
                  <span>7 Days</span><span>₹70,000</span>
                </div>
                <button onClick={() => navigate("/description/ladakh")}>View Details</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;