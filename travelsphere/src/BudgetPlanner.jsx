import React, { useState } from "react";
import "./Home.css";
import "./BudgetPlanner.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import BudgetResult from "./BudgetResult";

function BudgetPlanner() {

  const navigate = useNavigate();

  const profileImg = localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  const [form, setForm] = useState({
    days: "",
    travelers: "",
    travelMode: "",
    hotel: "",
    rooms: "",
    meals: "",
    activities: "",
    maxDist: "",
    destinationType: "",
    travelStyle: "",
    localTransport: "",
    foodPreference: "",
    guide: "",
    buffer: ""
  });

  const handleChange = (e) => {
    let value = e.target.value;

    if (["days", "travelers", "rooms", "maxDist", "buffer"].includes(e.target.name)) {
      value = Math.max(0, Number(value));
    }

    setForm({
      ...form,
      [e.target.name]: value
    });
  };

  const BudgetResult = () => {

    const { days, travelers } = form;
    if (!days || !travelers) return;

    let total = 0;

    const d = Number(days);
    const p = Number(travelers);

    // Base cost
    total += d * p * 1200;

    // Travel Mode
    if (form.travelMode === "bus") total += form.maxDist * 2 * p;
    if (form.travelMode === "train") total += form.maxDist * 4 * p;
    if (form.travelMode === "flight") total += form.maxDist * 10 * p;

    // Hotel
    if (form.hotel === "standard") total += d * 1500 * form.rooms;
    if (form.hotel === "premium") total += d * 3000 * form.rooms;
    if (form.hotel === "luxury") total += d * 6000 * form.rooms;

    // Meals
    if (form.meals === "yes") total += d * p * 800;

    // Activities
    if (form.activities === "basic") total += 2000;
    if (form.activities === "adventure") total += 6000;
    if (form.activities === "premium") total += 10000;

    // Local Transport
    if (form.localTransport === "cab") total += d * 2000;
    if (form.localTransport === "bike") total += d * 800;

    // Guide
    if (form.guide === "yes") total += d * 1500;

    // Travel Style multiplier
    if (form.travelStyle === "budget") total *= 0.9;
    if (form.travelStyle === "luxury") total *= 1.3;

    // Buffer %
    if (form.buffer) total += (total * form.buffer) / 100;

    navigate("/budget-result", { state: { form, total: Math.round(total) } });
  };

  return (

    <div className="home">

      {/* ✅ SIDEBAR */}
      <Sidebar />

      <div className="main">

        <div className="banner">
          <div className="banner-text">
            <h1>Plan Your Trip Budget</h1>
            <p>Get a realistic travel cost estimate based on your preferences</p>
          </div>
          <img
            src={profileImg}
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
                <label>Destination Type</label>
                <select name="destinationType" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Mountains</option>
                  <option>Beach</option>
                  <option>City</option>
                  <option>Spiritual</option>
                </select>
              </div>

              <div>
                <label>Travel Style</label>
                <select name="travelStyle" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="budget">Budget</option>
                  <option value="standard">Standard</option>
                  <option value="luxury">Luxury</option>
                </select>
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
                <label>Food Preference</label>
                <select name="foodPreference" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Veg</option>
                  <option>Non-Veg</option>
                  <option>Mixed</option>
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
                <label>Local Transport</label>
                <select name="localTransport" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="cab">Cab</option>
                  <option value="bike">Bike</option>
                  <option value="public">Public Transport</option>
                </select>
              </div>

              <div>
                <label>Guide Required</label>
                <select name="guide" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label>Distance (km)</label>
                <input type="number" name="maxDist" onChange={handleChange} />
              </div>

              <div>
                <label>Extra Buffer (%)</label>
                <input type="number" name="buffer" placeholder="Recommended 10-15%" onChange={handleChange} />
              </div>

            </div>

            <button className="generate-btn" onClick={BudgetResult}>
              Generate Budget
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BudgetPlanner;