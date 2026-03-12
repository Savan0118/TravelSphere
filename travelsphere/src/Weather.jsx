import React, { useState } from "react";
import "./Home.css";
import "./Weather.css";
import { useNavigate } from "react-router-dom";

function Weather() {

  const navigate = useNavigate();

  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const [error, setError] = useState("");

  const API_KEY = "4cda19cb02f64ec9ae974737262702";


  const getWeather = async () => {

    if (city === "") {

      setError("Please enter city name");

      setWeatherData(null);

      return;

    }

    try {

      setError("");

      const response = await fetch(

        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`

      );

      const data = await response.json();

      if (data.error) {

        setError(data.error.message);

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



            <li onClick={() => navigate("/search")}>

              <span style={{ fontSize: '18px' }}>🔍</span> Explore

            </li>



            <li
              onClick={() => navigate("/journeys")}
            >

              <span style={{ fontSize: '18px' }}>🗺️</span> My Journeys

            </li>


            <li onClick={() => navigate("/budget")}>

              <span style={{ fontSize: '18px' }}>💰</span> Budget Planner
              
            </li>



            <li
              onClick={() => navigate("/about")}
            >

              <span style={{ fontSize: '18px' }}>ℹ️</span> About Us

            </li>



            <li className="active">

              <span style={{ fontSize: '18px' }}>🌦️</span> Weather

            </li>


          </ul>


        </div>



        <div className="logout-container">
          <div className="logout" onClick={() => navigate("/")}>
            ⏻ Log Out
          </div>
        </div>


      </div>





      {/* MAIN */}

      <div className="main">



        {/* BANNER */}

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





        {/* CONTENT */}

        <div className="content-area">



          <div className="weather-layout" style={{ display: "block" }}>



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

                <>



                  {/* CURRENT WEATHER */}

                  <div className="weather-card">



                    <h3>

                      {weatherData.location.name}

                    </h3>



                    <div className="weather-details">



                      <div>

                        🌡 Temperature

                        <span>

                          {weatherData.current.temp_c} °C

                        </span>

                      </div>



                      <div>

                        ☁ Condition

                        <span>

                          {weatherData.current.condition.text}

                        </span>

                      </div>



                      <div>

                        💧 Humidity

                        <span>

                          {weatherData.current.humidity} %

                        </span>

                      </div>



                      <div>

                        🌬 Wind Speed

                        <span>

                          {weatherData.current.wind_kph} km/h

                        </span>

                      </div>



                    </div>



                  </div>





                  {/* HOURLY FORECAST */}

                  <div className="weather-card">



                    <h3>

                      Today Forecast

                    </h3>



                    <div className="hourly-row">



                      {

                        weatherData.forecast.forecastday[0].hour

                        .slice(0, 6)

                        .map((h, i) => (



                          <div key={i}>



                            {h.time.split(" ")[1]}



                            <br />



                            {h.temp_c}°C



                          </div>



                        ))

                      }



                    </div>



                  </div>





                  {/* WEEKLY FORECAST */}

                  <div className="weather-card">



                    <h3>

                      7 Day Forecast

                    </h3>



                    {

                      weatherData.forecast.forecastday.map((day, i) => (



                        <div className="weekly-row" key={i}>



                          <span>

                            {day.date}

                          </span>



                          <span>

                            {day.day.avgtemp_c}°C

                          </span>



                          <span>

                            {day.day.condition.text}

                          </span>



                        </div>



                      ))

                    }



                  </div>



                </>

              )}



            </div>



          </div>



        </div>



      </div>



    </div>

  );

}

export default Weather;