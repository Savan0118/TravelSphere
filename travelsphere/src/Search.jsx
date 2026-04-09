import React, { useState } from "react";
import "./Home.css";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Search() {

    const navigate = useNavigate();

    /* ✅ ADDED STATE */
    const [searchText, setSearchText] = useState("");
    const [travelDate, setTravelDate] = useState("");
    const [days, setDays] = useState("");
    const [budget, setBudget] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const profileImg = localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    return (

        <div className="home">
        {/* SIDEBAR */}
        <Sidebar />
            {/* MAIN */}
            <div className="main">
                {/* BANNER */}
                <div className="banner">

                    <div className="banner-text">

                        {/* ✅ UPDATED PROFESSIONAL TITLE */}
                        <h1>
                            Discover Exceptional Destinations Across the Globe
                        </h1>


                        {/* ✅ UPDATED PROFESSIONAL SUBTITLE */}
                        <p>
                            Search, compare, and select the perfect destination tailored to your travel dreams with TravelSphere
                        </p>

                    </div>

                    <img
                        src={profileImg}
                        className="profile"
                        onClick={() => navigate("/profile")}
                        style={{ cursor: "pointer" }}
                    />

                    {/* SEARCH BAR PILL */}
                    <div className="search-bar-pill">

                        <div className="search-pill-item">
                            <input
                                type="text"
                                placeholder="Budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                style={{ border: "none", background: "transparent", outline: "none", fontWeight: "600", color: "#1a1a1a", fontSize: "13px", width: "135px" }}
                            />
                        </div>

                        <div className="pill-divider"></div>

                        <div className="search-pill-item">
                            <input
                                type="date"
                                value={travelDate}
                                onChange={(e) => setTravelDate(e.target.value)}
                                style={{ border: "none", background: "transparent", outline: "none", fontWeight: "600", color: "#1a1a1a", fontSize: "13px", width: "130px" }}
                            />
                        </div>

                        <div className="pill-divider"></div>

                        <div className="search-pill-item">
                            <input
                                type="number"
                                min="1"
                                placeholder="Days"
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                style={{ border: "none", background: "transparent", outline: "none", fontWeight: "600", color: "#1a1a1a", fontSize: "13px", width: "80px" }}
                            />
                        </div>

                        <button className="search-pill-btn">

                            Explore Now

                        </button>

                    </div>

                </div>

                {/* CONTENT */}
                <div className="content-area">

                    {/* ✅ UPDATED TITLE */}
                    <h2 style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        marginBottom: "5px"
                    }}>
                        Explore Premium Travel Destinations
                    </h2>

                    {/* ✅ NEW PROFESSIONAL SUBTEXT */}
                    <p style={{
                        marginTop: "0px",
                        marginBottom: "20px",
                        color: "#555",
                        fontSize: "14px"
                    }}>
                        Use advanced search and filters to discover destinations that match your preferences, budget, and travel style.
                    </p>

                    {/* SEARCH BAR */}
                    <div className="top-search-bar-container">
                        <input
                            type="text"
                            placeholder="Search destinations, cities, landmarks..."
                            className="top-search-bar"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <div className="search-categories">
                        <button className={`search-cat-btn ${selectedCategory === "Scenic Villages" ? "active-cat" : ""}`} onClick={() => setSelectedCategory("Scenic Villages")}>
                            Scenic Villages
                        </button>

                        <button className={`search-cat-btn ${selectedCategory === "Coastal Beaches" ? "active-cat" : ""}`} onClick={() => setSelectedCategory("Coastal Beaches")}>
                            Coastal Beaches
                        </button>

                        <button className={`search-cat-btn ${selectedCategory === "Mountain Escapes" ? "active-cat" : ""}`} onClick={() => setSelectedCategory("Mountain Escapes")}>
                            Mountain Escapes
                        </button>

                        <button className={`search-cat-btn ${selectedCategory === "Spiritual Places" ? "active-cat" : ""}`} onClick={() => setSelectedCategory("Spiritual Places")}>
                            Spiritual Places
                        </button>

                        <button className={`search-cat-btn ${selectedCategory === "Explore More" ? "active-cat" : ""}`} onClick={() => setSelectedCategory("All")}>
                            Explore More ˅
                        </button>

                    </div>

                    <div className="search-list">


                        {/* CARD 1 */}
                        {("ladakh".includes(searchText.toLowerCase()) || searchText === "") && (selectedCategory === "All" || selectedCategory === "Mountain Escapes") && (

                            <div className="package search-card">


                                <img src="Images\ladakh.png" alt="Ladakh" />


                                <div className="package-info">


                                    <h3>Ladakh</h3>


                                    <p>

                                        Ladakh is a high-altitude cold desert famous for its stark Himalayan landscapes.

                                    </p>


                                    <div className="package-bottom">


                                        <div className="price-tag">

                                            <span>7 days</span>

                                            <span>5 Seats Left</span>

                                            <span>₹70,000</span>

                                        </div>


                                        <button onClick={() => navigate("/description/ladakh")}>
                                            View Details
                                        </button>


                                    </div>


                                </div>


                            </div>

                        )}



                        {/* CARD 2 */}
                        {("varanasi".includes(searchText.toLowerCase()) || searchText === "") && (selectedCategory === "All" || selectedCategory === "Spiritual Places") && (

                            <div className="package search-card">


                                <img src="Images\varanasi.png" alt="Varanasi" />


                                <div className="package-info">


                                    <h3>Varanasi</h3>


                                    <p>

                                        One of the oldest cities in the world famous for Ganga Aarti.

                                    </p>


                                    <div className="package-bottom">


                                        <div className="price-tag">

                                            <span>5 days</span>

                                            <span>10 Seats Left</span>

                                            <span>₹14,000</span>

                                        </div>


                                        <button onClick={() => navigate("/description/varanasi")}>
                                            View Details
                                        </button>


                                    </div>


                                </div>


                            </div>

                        )}



                        {/* CARD 3 */}
                        {("taj mahal".includes(searchText.toLowerCase()) || searchText === "") && (selectedCategory === "All" || selectedCategory === "Explore More") && (

                            <div className="package search-card">


                                <img src="Images/taj_mahal.jpeg" alt="Taj Mahal" />


                                <div className="package-info">


                                    <h3>Taj Mahal</h3>


                                    <p>

                                        One of the Seven Wonders of the World.

                                    </p>


                                    <div className="package-bottom">


                                        <div className="price-tag">

                                            <span>2 days</span>

                                            <span>2 Seats Left</span>

                                            <span>₹2500</span>

                                        </div>


                                        <button onClick={() => navigate("/description/tajmahal")}>
                                            View Details
                                        </button>


                                    </div>


                                </div>


                            </div>

                        )}


                    </div>


                </div>


            </div>


        </div>

    );

}

export default Search;