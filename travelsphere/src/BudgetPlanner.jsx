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

    if (!form.days || !form.travelers || !form.travelMode || !form.hotel) return;

    const days = Number(form.days);
    const people = Number(form.travelers);

    let total = days * people * 1200;

    if (form.travelMode === "bus") total += form.maxDist * 2 * people;
    if (form.travelMode === "train") total += form.maxDist * 4 * people;
    if (form.travelMode === "flight") total += form.maxDist * 10 * people;

    if (form.hotel === "standard") total += days * 1500 * form.rooms;
    if (form.hotel === "premium") total += days * 3000 * form.rooms;
    if (form.hotel === "luxury") total += days * 6000 * form.rooms;

    if (form.meals === "yes") total += days * people * 800;

    if (form.activities === "basic") total += 2000;
    if (form.activities === "adventure") total += 5000;
    if (form.activities === "premium") total += 9000;

    navigate("/budget-result", { state: { form, total } });
  };

  return (

    <div className="home">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-top">

          <h2 className="logo">TravelSphere</h2>

          <p className="tagline">
            Discover. Plan. Experience.<br />
            Your gateway to unforgettable journeys
          </p>

          <ul className="menu">
            <li onClick={() => navigate("/home")}>🏠 Home</li>
            <li onClick={() => navigate("/search")}>🔍 Explore</li>
            <li onClick={() => navigate("/journeys")}>🗺️ My Journeys</li>
            <li className="active">💰 Budget Planner</li>
            <li onClick={() => navigate("/about")}>ℹ️ About Us</li>
            <li onClick={() => navigate("/weather")}>🌦️ Weather</li>
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
            <h1>Plan Your Trip Budget</h1>
            <p>Estimate your travel expenses easily</p>
          </div>

          {/* ✅ ADDED PROFILE ICON */}
          <img
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />

        </div>

        <div className="content-area">

          <div className="budget-card">

            <div className="grid-2">

              <div>
                <label>Number of Days</label>
                <input type="number" name="days" onChange={handleChange} />
              </div>

              <div>
                <label>Number of Travelers</label>
                <input type="number" name="travelers" onChange={handleChange} />
              </div>

              <div>
                <label>Travel Mode</label>
                <select name="travelMode" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                  <option value="flight">Flight</option>
                </select>
              </div>

              <div>
                <label>Hotel Type</label>
                <select name="hotel" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              <div>
                <label>Rooms Required</label>
                <input type="number" name="rooms" onChange={handleChange} />
              </div>

              <div>
                <label>Meals Included</label>
                <select name="meals" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label>Activities</label>
                <select name="activities" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="basic">Basic</option>
                  <option value="adventure">Adventure</option>
                  <option value="premium">Premium</option>
                </select>
              </div>

              <div>
                <label>Distance (km)</label>
                <input type="number" name="maxDist" onChange={handleChange} />
              </div>

            </div>

            <button className="generate-btn" onClick={calculateBudget}>
              Generate Budget
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BudgetPlanner;