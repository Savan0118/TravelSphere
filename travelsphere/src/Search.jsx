import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Heart, Bell } from "lucide-react";

const allPackages = [
    { id: "ladakh", title: "Ladakh", category: "Mountain Escapes", desc: "Ladakh is a high-altitude cold desert famous for its stark Himalayan landscapes.", img: "Images/ladakh.png", days: "7 days", seats: "5 Seats Left", price: "₹70,000" },
    { id: "varanasi", title: "Varanasi", category: "Spiritual Places", desc: "One of the oldest cities in the world famous for Ganga Aarti.", img: "Images/varanasi.png", days: "5 days", seats: "10 Seats Left", price: "₹14,000" },
    { id: "tajmahal", title: "Taj Mahal", category: "Explore More", desc: "One of the Seven Wonders of the World.", img: "Images/taj_mahal.jpeg", days: "2 days", seats: "2 Seats Left", price: "₹2500" }
];

function Search() {
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");
    const [travelDate, setTravelDate] = useState("");
    const [days, setDays] = useState("");
    const [budget, setBudget] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

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

    const toggleWishlist = (pkg) => {
        let newList;
        if (wishlist.some(item => item.id === pkg.id)) newList = wishlist.filter(item => item.id !== pkg.id);
        else newList = [...wishlist, pkg];
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
                        <h1>Discover Exceptional Destinations Across the Globe</h1>
                        <p>Search, compare, and select the perfect destination tailored to your travel dreams with TravelSphere</p>
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

                    <div className="search-bar-pill">
                        <div className="search-pill-item">
                            <input type="text" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} style={{ border: "none", background: "transparent", outline: "none", fontWeight: "600", color: "var(--text-main)", fontSize: "13px", width: "135px" }} />
                        </div>
                        <div className="pill-divider"></div>
                        <div className="search-pill-item">
                            <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} style={{ border: "none", background: "transparent", outline: "none", fontWeight: "600", color: "var(--text-main)", fontSize: "13px", width: "130px" }} />
                        </div>
                        <div className="pill-divider"></div>
                        <div className="search-pill-item">
                            <input type="number" min="1" placeholder="Days" value={days} onChange={(e) => setDays(e.target.value)} style={{ border: "none", background: "transparent", outline: "none", fontWeight: "600", color: "var(--text-main)", fontSize: "13px", width: "80px" }} />
                        </div>
                        <button className="search-pill-btn">Explore Now</button>
                    </div>
                </div>

                <div className="content-area">
                    <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "5px", color: "var(--text-main)" }}>Explore Premium Travel Destinations</h2>
                    <p style={{ marginTop: "0px", marginBottom: "20px", color: "var(--text-desc)", fontSize: "14px" }}>Use advanced search and filters to discover destinations that match your preferences, budget, and travel style.</p>

                    <div className="top-search-bar-container">
                        <input type="text" placeholder="Search destinations, cities, landmarks..." className="top-search-bar" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    </div>

                    <div className="search-categories">
                        {["Scenic Villages", "Coastal Beaches", "Mountain Escapes", "Spiritual Places"].map(cat => (
                            <button key={cat} className={`search-cat-btn ${selectedCategory === cat ? "active-cat" : ""}`} onClick={() => setSelectedCategory(cat)}>{cat}</button>
                        ))}
                        <button className={`search-cat-btn ${selectedCategory === "All" ? "active-cat" : ""}`} onClick={() => setSelectedCategory("All")}>Explore More ˅</button>
                    </div>

                    <div className="search-list">
                        {allPackages
                            .filter(pkg => (searchText === "" || pkg.title.toLowerCase().includes(searchText.toLowerCase())))
                            .filter(pkg => selectedCategory === "All" || pkg.category === selectedCategory || (selectedCategory === "All" && pkg.category === "Explore More"))
                            .map((pkg) => {
                                const isSaved = wishlist.some(item => item.id === pkg.id);
                                const reviews = JSON.parse(localStorage.getItem(`reviews_${pkg.id}`) || "[]");
                                const avgRating = reviews.length ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : null;

                                return (
                                    <div className="package search-card" key={pkg.id}>
                                        <div style={{ position: 'relative', width: '250px', height: '100%', flexShrink: 0 }}>
                                            <img src={pkg.img} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="package-info">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                <div style={{ paddingRight: '10px' }}>
                                                   <h3>{pkg.title}</h3>
                                                   {avgRating && <span style={{ fontSize: '12px', fontWeight: 'bold', background: '#ffc107', padding: '2px 6px', borderRadius: '10px', color: '#000', display: 'inline-block', marginTop: '5px' }}>⭐ {avgRating}</span>}
                                                </div>
                                                <Heart 
                                                    onClick={() => toggleWishlist(pkg)}
                                                    size={24} 
                                                    style={{ cursor: 'pointer', fill: isSaved ? '#e74c3c' : 'transparent', color: isSaved ? '#e74c3c' : 'var(--text-muted)', transition: '0.2s', flexShrink: 0 }} 
                                                />
                                            </div>
                                            <p>{pkg.desc}</p>
                                            <div className="package-bottom">
                                                <div className="price-tag">
                                                    <span>{pkg.days}</span>
                                                    <span style={{ borderRight: '1px solid var(--border-color)', paddingRight: '10px', marginRight: '10px' }}>{pkg.seats}</span>
                                                    <span>{pkg.price}</span>
                                                </div>
                                                <button onClick={() => navigate(`/description/${pkg.id}`)}>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;