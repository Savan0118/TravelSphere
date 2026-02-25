import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

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


            <li className="active">
              <span style={{ fontSize: '18px' }}>🏠</span> Home
            </li>


            <li>
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




        {/* LOGOUT */}
        <div className="logout-container">


          <div
            className="logout"
            onClick={() => navigate("/")}
          >


            <span style={{ fontSize: '20px' }}>
              ⏻
            </span>


            Sign Out


          </div>


        </div>



      </div>





      {/* MAIN */}
      <div className="main">


        {/* BANNER */}
        <div className="banner">


          <div className="banner-text">


            <h1>
              Explore the World Without Limits
            </h1>


            <p>
              Find destinations, build your perfect trip, and create lifelong memories with TravelSphere
            </p>


          </div>



          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="profile"
            alt="User Profile"
          />


        </div>




        <div className="content-area">



          {/* DESTINATIONS */}
          <div className="destinations-header">


            <h2>
              Trending Destinations
            </h2>


            <div className="view-all">
              View All <span>»»</span>
            </div>


          </div>




          <div className="cards">



            <div className="card">


              <div className="card-img-container">
                <img src="/Images/Home_Img.png" alt="Amber Fort" />
              </div>


              <div className="card-info">


                <h3>
                  Amber Fort
                </h3>


                <p className="location">
                  Jaipur, Rajasthan
                </p>


                <p className="desc">
                  Experience royal heritage and timeless architecture in Rajasthan.
                </p>


                <button>
                  View
                </button>


              </div>


            </div>




            <div className="card">


              <div className="card-img-container">
                <img src="/Images/Home_Img.png" alt="Gateway of India" />
              </div>


              <div className="card-info">


                <h3>
                  Gateway of India
                </h3>


                <p className="location">
                  Mumbai, Maharashtra
                </p>


                <p className="desc">
                  Explore Mumbai’s iconic monument beside the Arabian Sea.
                </p>


                <button>
                  View
                </button>


              </div>


            </div>




            <div className="card">


              <div className="card-img-container">
                <img src="/Images/Home_Img.png" alt="Kashmir" />
              </div>


              <div className="card-info">


                <h3>
                  Kashmir
                </h3>


                <p className="location">
                  Jammu & Kashmir
                </p>


                <p className="desc">
                  Discover paradise on earth with mountains, lakes, and valleys.
                </p>


                <button>
                  View
                </button>


              </div>


            </div>



          </div>





          {/* PACKAGES */}
          <h2>
            Featured Packages
          </h2>




          <div className="package">


            <img src="/Images/Home_Img.png" alt="Ladakh" />


            <div className="package-info">


              <h3>
                Ladakh Expedition
              </h3>


              <p>
                Experience breathtaking landscapes and unforgettable adventures in Ladakh.
              </p>



              <div className="package-bottom">


                <div className="price-tag">


                  <span>
                    7 Days
                  </span>


                  <span>
                    ₹70,000
                  </span>


                </div>



                <button>
                  View Details
                </button>


              </div>


            </div>


          </div>



        </div>


      </div>


    </div>

  );

}

export default Home;