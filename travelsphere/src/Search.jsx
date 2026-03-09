import React, { useState } from "react";
import "./Home.css";
import "./Search.css";
import { useNavigate } from "react-router-dom";

function Search() {

    const navigate = useNavigate();

    /* ✅ ADDED STATE */
    const [searchText, setSearchText] = useState("");

    return (

        <div className="home">


            {/* SIDEBAR */}
            <div className="sidebar">


                <div className="sidebar-top">


                    <h2 className="logo">
                        TravelSphere
                    </h2>


                    <p className="tagline">
                        Discover. Plan. Experience.<br />
                        Your gateway to unforgettable journeys
                    </p>



                    <ul className="menu">


                        <li onClick={() => navigate("/home")}>
                            <span style={{ fontSize: '18px' }}>🏠</span> Home
                        </li>


                        <li
                            className="active"
                            onClick={() => navigate("/search")}
                        >
                            <span style={{ fontSize: '18px' }}>🔍</span> Explore
                        </li>


                        <li>
                            <span style={{ fontSize: '18px' }}>🗺️</span> My Journeys
                        </li>


                        <li onClick={() => navigate("/budget")}>
                            <span style={{ fontSize: '18px' }}>💰</span> Budget Planner
                        </li>


                        <li>
                            <span style={{ fontSize: '18px' }}>ℹ️</span> About TravelSphere
                        </li>

                        <li onClick={() => navigate("/weather")}>
                            <span style={{ fontsize: '18px' }}>🌦️</span> Weather
                        </li>


                    </ul>


                </div>



                <div className="logout-container">


                    <div
                        className="logout"
                        onClick={() => navigate("/")}
                    >

                        <span style={{ fontSize: '20px' }}>⏻</span>

                        Sign Out

                    </div>


                </div>


            </div>



            {/* MAIN */}
            <div className="main">


                {/* BANNER */}
                <div className="banner search-banner">


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
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        className="profile"
                        alt="User Profile"
                    />


                    {/* SEARCH BAR PILL */}
                    <div className="search-bar-pill">


                        <div className="search-pill-item">

                            Choose Destination

                            <span className="pill-icon">˅</span>

                        </div>


                        <div className="pill-divider"></div>


                        <div className="search-pill-item">

                            Select Travel Date

                        </div>


                        <div className="pill-divider"></div>


                        <div className="search-pill-item">

                            Guests : 2 Adults

                            <span className="pill-icon">˅</span>

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


                        <button className="search-cat-btn">
                            Scenic Villages
                        </button>


                        <button className="search-cat-btn">
                            Coastal Beaches
                        </button>


                        <button className="search-cat-btn">
                            Mountain Escapes
                        </button>


                        <button className="search-cat-btn">
                            Spiritual Places
                        </button>


                        <button className="search-cat-btn">
                            Explore More ˅
                        </button>


                    </div>



                    <div className="search-list">


                        {/* CARD 1 */}
                        {("ladakh".includes(searchText.toLowerCase()) || searchText === "") && (

                        <div className="package search-card">


                            <img src="/Images/Home_Img.png" alt="Ladakh" />


                            <div className="package-info">


                                <h3>Ladakh</h3>


                                <p>

                                    Ladakh is a high-altitude cold desert famous for its stark Himalayan landscapes.

                                </p>


                                <div className="package-bottom">


                                    <div className="price-tag">

                                        <span>7 days</span>

                                        <span>₹70,000</span>

                                    </div>


                                    <button>

                                        View Details

                                    </button>


                                </div>


                            </div>


                        </div>

                        )}



                        {/* CARD 2 */}
                        {("varanasi".includes(searchText.toLowerCase()) || searchText === "") && (

                        <div className="package search-card">


                            <img src="/Images/Home_Img.png" alt="Varanasi" />


                            <div className="package-info">


                                <h3>Varanasi</h3>


                                <p>

                                    One of the oldest cities in the world famous for Ganga Aarti.

                                </p>


                                <div className="package-bottom">


                                    <div className="price-tag">

                                        <span>5 days</span>

                                        <span>₹14,000</span>

                                    </div>


                                    <button>

                                        View Details

                                    </button>


                                </div>


                            </div>


                        </div>

                        )}



                        {/* CARD 3 */}
                        {("taj mahal".includes(searchText.toLowerCase()) || searchText === "") && (

                        <div className="package search-card">


                            <img src="/Images/Home_Img.png" alt="Taj Mahal" />


                            <div className="package-info">


                                <h3>Taj Mahal</h3>


                                <p>

                                    One of the Seven Wonders of the World.

                                </p>


                                <div className="package-bottom">


                                    <div className="price-tag">

                                        <span>2 days</span>

                                        <span>₹2500</span>

                                    </div>


                                    <button>

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