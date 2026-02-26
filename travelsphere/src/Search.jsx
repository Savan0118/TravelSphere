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


                        <li>
                            <span style={{ fontSize: '18px' }}>💰</span> Budget Planner
                        </li>


                        <li>
                            <span style={{ fontSize: '18px' }}>ℹ️</span> About TravelSphere
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

                        <h1>Find Your Next Adventure</h1>

                        <p>Explore the world with ease</p>

                    </div>


                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        className="profile"
                        alt="User Profile"
                    />


                    {/* SEARCH BAR PILL */}
                    <div className="search-bar-pill">


                        <div className="search-pill-item">

                            Where to ?

                            <span className="pill-icon">˅</span>

                        </div>


                        <div className="pill-divider"></div>


                        <div className="search-pill-item">

                            📅 Date to travel

                        </div>


                        <div className="pill-divider"></div>


                        <div className="search-pill-item">

                            👤 2 Adults

                            <span className="pill-icon">˅</span>

                        </div>


                        <button className="search-pill-btn">

                            Search

                        </button>


                    </div>


                </div>



                {/* CONTENT */}
                <div className="content-area">


                    <h2>Search Destinations</h2>


                    {/* ✅ ADDED SEARCH BAR HERE */}
                    <div className="top-search-bar-container">

                        <input
                            type="text"
                            placeholder="Search destinations..."
                            className="top-search-bar"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />

                    </div>



                    <div className="search-categories">


                        <button className="search-cat-btn">Villages</button>

                        <button className="search-cat-btn">Beaches</button>

                        <button className="search-cat-btn">Mountains</button>

                        <button className="search-cat-btn">Temples</button>

                        <button className="search-cat-btn">
                            Other Places ˅
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