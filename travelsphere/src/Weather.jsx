import React, { useState } from "react";
import "./Home.css";
import "./Weather.css";
import { useNavigate } from "react-router-dom";

function Weather() {

  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "2NV3GDRL7VMJEQGRCLWKPP5D8";


  const getWeather = async () => {

    if (city === "") {

      setError("Please enter city name");
      setWeatherData(null);
      return;

    }

    try {

      setError("");

      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`
      );

      const data = await response.json();

      if (data.error) {

        setError("City not found");
        setWeatherData(null);

      }
      else {

        setWeatherData(data);

      }

    }
    catch {

      setError("Failed to fetch weather");

    }

  };



  return (

    <div className="home">


      {/* SIDEBAR — EXACT SAME AS HOME.JSX */}
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


            <li
              onClick={() => navigate("/home")}
            >
              <span style={{ fontSize: '18px' }}>🏠</span> Home
            </li>


            <li
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


            {/* ONLY ACTIVE CLASS DIFFERENCE */}
            <li
              className="active"
              onClick={() => navigate("/weather")}
            >
              <span style={{ fontSize: '18px' }}>🌦️</span> Weather
            </li>


          </ul>


        </div>



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


        <div className="banner weather-banner">


          <div className="banner-text">


            <h1>
              Check Weather Before Your Journey
            </h1>


            <p>
              Get real-time weather insights to plan your perfect trip confidently
            </p>


          </div>



          <img
            src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
            className="profile"
            alt="Weather"
          />


        </div>



        <div className="content-area">


          <div className="weather-layout">


            <div className="weather-left">


              <h2>
                Weather Forecast
              </h2>


              <div className="weather-search-box">


                <input
                  type="text"
                  placeholder="Enter city name (example: Rajkot)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />


                <button onClick={getWeather}>
                  Get Weather
                </button>


              </div>



              {error && (

                <p className="weather-error">
                  {error}
                </p>

              )}



              {weatherData && (

                <div className="weather-card">


                  <h3>
                    {weatherData.address}
                  </h3>


                  <div className="weather-details">


                    <div>
                      🌡 Temperature
                      <span>
                        {weatherData.currentConditions.temp} °C
                      </span>
                    </div>


                    <div>
                      ☁ Condition
                      <span>
                        {weatherData.currentConditions.conditions}
                      </span>
                    </div>


                    <div>
                      💧 Humidity
                      <span>
                        {weatherData.currentConditions.humidity} %
                      </span>
                    </div>


                    <div>
                      🌬 Wind Speed
                      <span>
                        {weatherData.currentConditions.windspeed} km/h
                      </span>
                    </div>


                  </div>


                </div>

              )}


            </div>



            <div className="weather-right">


              <h2>
                Travel Weather Tips
              </h2>


              <div className="tips-card">
                🌤 Always check forecast before travelling
              </div>


              <div className="tips-card">
                🧥 Carry proper clothes
              </div>


              <div className="tips-card">
                🌧 Rain may affect plans
              </div>


              <div className="tips-card">
                🌡 Avoid extreme weather travel
              </div>


            </div>


          </div>


        </div>


      </div>


    </div>

  );

}

export default Weather;