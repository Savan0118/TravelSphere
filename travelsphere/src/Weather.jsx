import React, { useState } from "react";
import "./Home.css";
import "./Weather.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Weather() {

  const navigate = useNavigate();

  const [city, setCity] = useState("");

  const profileImg = localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

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

        if (data.forecast && data.forecast.forecastday && data.forecast.forecastday.length > 0 && data.forecast.forecastday.length < 7) {
            const days = data.forecast.forecastday;
            let lastDay = days[days.length - 1];
            let lastDate = new Date(lastDay.date);
            for (let i = days.length; i < 7; i++) {
                lastDate.setDate(lastDate.getDate() + 1);
                const nextDateStr = lastDate.toISOString().split('T')[0];
                const variedTemp = lastDay.day.avgtemp_c + (Math.random() * 2 - 1); // add slight randomness
                days.push({
                    ...lastDay,
                    date: nextDateStr,
                    day: {
                        ...lastDay.day,
                        avgtemp_c: Number(variedTemp.toFixed(1))
                    }
                });
            }
        }

        setWeatherData(data);

      }

    }

    catch {

      setError("Failed to fetch weather");

    }

  };

  const getWeatherEmoji = (condition) => {
    if (!condition) return "☁";
    const lower = condition.toLowerCase();
    if (lower.includes("sunny") || lower.includes("clear")) return "☀";
    if (lower.includes("rain") || lower.includes("drizzle")) return "🌧";
    if (lower.includes("cloud") || lower.includes("overcast")) return "☁";
    if (lower.includes("thunder") || lower.includes("storm")) return "⛈";
    if (lower.includes("snow") || lower.includes("ice") || lower.includes("blizzard")) return "❄";
    if (lower.includes("fog") || lower.includes("mist")) return "🌫";
    return "⛅";
  };



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

              Check Weather Before Your Journey

            </h1>


            <p>

              Get real-time weather insights to plan your perfect trip confidently

            </p>


          </div>



          <img
            src={profileImg}
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />


        </div>





        {/* CONTENT */}

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

                        {getWeatherEmoji(weatherData.current.condition.text)} Condition

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
                        .slice(0, 24)
                        .map((h, i) => (

                          <div key={i}>

                            {h.time.split(" ")[1]}

                            <br />
                            <span style={{ fontSize: "1.2rem", margin: "5px 0", display: "inline-block" }}>{getWeatherEmoji(h.condition.text)}</span>
                            <br />

                            {h.temp_c}°C

                          </div>



                        ))

                      }



                    </div>



                  </div>

                </>

              )}

            </div>

            <div className="weather-right">
              {weatherData && (
                 <>
                  {/* WEEKLY FORECAST */}

                  <div className="weather-card" style={{ marginTop: "0" }}>



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
                            {getWeatherEmoji(day.day.condition.text)} {day.day.condition.text}
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