import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Home() {

  const navigate = useNavigate();

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


            <h1>
              Explore the World Without Limits
            </h1>


            <p>
              Find destinations, build your perfect trip, and create lifelong memories with TravelSphere
            </p>


          </div>



          <img
            src={profileImg}
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />


        </div>




        <div className="content-area">


          {/* POPULAR DESTINATIONS */}
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


                <h3>Amber Fort</h3>

                <p className="location">
                  Jaipur, Rajasthan
                </p>


                <p className="desc">
                  Experience royal heritage and timeless architecture in Rajasthan.
                </p>


                <button onClick={() => navigate("/description/amberfort")}>
                  View
                </button>


              </div>


            </div>




            <div className="card">


              <div className="card-img-container">
                <img src="/Images/Home_Img.png" alt="Gateway of India" />
              </div>


              <div className="card-info">


                <h3>Gateway of India</h3>

                <p className="location">
                  Mumbai, Maharashtra
                </p>


                <p className="desc">
                  Explore Mumbai’s iconic monument beside the Arabian Sea.
                </p>


                <button onClick={() => navigate("/description/gateway")}>
                  View
                </button>


              </div>


            </div>




            <div className="card">


              <div className="card-img-container">
                <img src="/Images/Home_Img.png" alt="Kashmir" />
              </div>


              <div className="card-info">


                <h3>Kashmir</h3>

                <p className="location">
                  Jammu & Kashmir
                </p>


                <p className="desc">
                  Discover paradise on earth with mountains, lakes, and valleys.
                </p>


                <button onClick={() => navigate("/description/kashmir")}>
                  View
                </button>


              </div>


            </div>


          </div>





          {/* PACKAGES */}
          <h2>Featured Packages</h2>



          <div className="package">


            <img src="/Images/Home_Img.png" alt="Ladakh" />


            <div className="package-info">


              <h3>Ladakh Expedition</h3>


              <p>
                Experience breathtaking landscapes and unforgettable adventures in Ladakh.
              </p>



              <div className="package-bottom">


                <div className="price-tag">


                  <span>7 Days</span>

                  <span>₹70,000</span>


                </div>



                <button onClick={()=>navigate("/description/ladakh")}>
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

/* This is Home.jsx */