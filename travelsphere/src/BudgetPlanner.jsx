import React, { useState } from "react";
import "./Home.css";
import "./BudgetPlanner.css";
import { useNavigate } from "react-router-dom";

function BudgetPlanner() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    days: "",
    travelers: "",
    travelMode: "",
    hotel: "",
    rooms: "",
    meals: "",
    activities: "",
    maxDist: ""
  });

  const handleChange = (e) => {

    let value = e.target.value;

    if (["days", "travelers", "rooms", "maxDist"].includes(e.target.name)) {
      value = Math.max(0, Number(value));
    }

    setForm({
      ...form,
      [e.target.name]: value
    });
  };

  const calculateBudget = () => {

    const days = Number(form.days);
    const people = Number(form.travelers);
    const distance = Number(form.maxDist);

    if (!days || !people) return;

    let total = 0;

    /* Base Cost */
    total += days * people * 1200;

    /* Travel Cost based on distance */

    if (form.travelMode === "Bus") {
      total += distance * 2 * people;
    }

    if (form.travelMode === "Train") {
      total += distance * 4 * people;
    }

    if (form.travelMode === "Flight") {
      total += distance * 10 * people;
    }

    /* Hotel Category */

    if (form.hotel === "Standard") {
      total += days * form.rooms * 1500;
    }

    if (form.hotel === "Premium") {
      total += days * form.rooms * 3000;
    }

    if (form.hotel === "Luxury") {
      total += days * form.rooms * 6000;
    }

    /* Meals */

    if (form.meals === "Yes") {
      total += days * people * 800;
    }

    /* Activities */

    if (form.activities === "Basic") {
      total += 2000;
    }

    if (form.activities === "Adventure") {
      total += 5000;
    }

    if (form.activities === "Premium") {
      total += 9000;
    }

    /* Navigate to result page */

    navigate("/budget-result", {
      state: {
        form: form,
        total: total
      }
    });
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
              <span style={{ fontSize: "18px" }}>🏠</span> Home
            </li>

            <li onClick={() => navigate("/search")}>
              <span style={{ fontSize: "18px" }}>🔍</span> Explore
            </li>

            <li onClick={() => navigate("/journeys")}>
              <span style={{ fontSize: '18px' }}>🗺️</span> My Journeys
            </li>

            <li className="active">
              <span style={{ fontSize: "18px" }}>💰</span> Budget Planner
            </li>

            <li onClick={() => navigate("/about")}>
              <span style={{ fontSize: '18px' }}>ℹ️</span> About Us
            </li>

            <li onClick={() => navigate("/weather")}>
              <span style={{ fontSize: "18px" }}>🌦️</span> Weather
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

        <div className="banner budget-banner">

          <div className="banner-text">

            <h1>
              Smart Trip Budget Planner
            </h1>

            <p>
              Provide a few travel details to estimate the total cost of your trip.
            </p>

          </div>

        </div>


        <div className="content-area">

          <div className="budget-card">

            <div className="grid-2">

              <div>

                <label>
                  Trip Duration (Days)
                </label>

                <input
                  type="number"
                  name="days"
                  onChange={handleChange}
                />

              </div>


              <div>

                <label>
                  Number of Travelers
                </label>

                <input
                  type="number"
                  name="travelers"
                  onChange={handleChange}
                />

              </div>


              <div>

                <label>
                  Travel Mode
                </label>

                <select
                  name="travelMode"
                  onChange={handleChange}
                >

                  <option value="">Select</option>
                  <option>Bus</option>
                  <option>Train</option>
                  <option>Flight</option>

                </select>

              </div>


              <div>

                <label>
                  Distance Range (km)
                </label>

                <input
                  type="number"
                  name="maxDist"
                  onChange={handleChange}
                />

              </div>


              <div>

                <label>
                  Hotel Category
                </label>

                <select
                  name="hotel"
                  onChange={handleChange}
                >

                  <option value="">Select</option>
                  <option>Standard</option>
                  <option>Premium</option>
                  <option>Luxury</option>

                </select>

              </div>


              <div>

                <label>
                  Rooms Required
                </label>

                <input
                  type="number"
                  name="rooms"
                  onChange={handleChange}
                />

              </div>


              <div>

                <label>
                  Include Daily Meals?
                </label>

                <select
                  name="meals"
                  onChange={handleChange}
                >

                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>

                </select>

              </div>


              <div>

                <label>
                  Paid Activities Package
                </label>

                <select
                  name="activities"
                  onChange={handleChange}
                >

                  <option value="">Select</option>
                  <option value="Basic">Basic</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Premium">Premium</option>

                </select>

              </div>

            </div>


            <button
              className="generate-btn"
              onClick={calculateBudget}
            >

              Generate Smart Budget

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BudgetPlanner;