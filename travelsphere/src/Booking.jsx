import React, { useState } from "react";
import "./Home.css";
import "./Booking.css";
import Sidebar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";

function Booking() {

  const navigate = useNavigate();
  const { id } = useParams();

  const packages = {
    ladakh: {
      name: "Ladakh Adventure Tour",
      price: 70000,
      duration: "7 Days / 6 Nights",
      hotel: "The Grand Dragon Ladakh",
      meals: "Breakfast + Dinner",
      seatsLeft: 5,
      totalSeats: 12
    },
    varanasi: {
      name: "Spiritual Varanasi Journey",
      price: 14000,
      duration: "5 Days / 4 Nights",
      hotel: "BrijRama Palace",
      meals: "Breakfast",
      seatsLeft: 8,
      totalSeats: 15
    }
  };

  const data = packages[id];

  // Simulated logged-in user (moved up)
  const user = {
    name: "Harish Patel",
    email: "harishpatel24@gmail.com"
  };

  // Hook moved to top level (before any conditions)
  const [travellers, setTravellers] = useState([
    { name: user.name, age: "" }
  ]);

  // fallback safety
  if (!data) {
    return <h2 style={{ padding: "40px" }}>Package Not Found</h2>;
  }

  const handleTravellerChange = (index, field, value) => {
    const updated = [...travellers];
    updated[index][field] = value;
    setTravellers(updated);
  };

  const addTraveller = () => {
    if (travellers.length < data.totalSeats) {
      setTravellers([...travellers, { name: "", age: "" }]);
    }
  };

  const removeTraveller = () => {
    if (travellers.length > 1) {
      setTravellers(travellers.slice(0, -1));
    }
  };

  const totalCost = travellers.length * data.price;

  const handleSubmit = () => {
    alert("Booking Request Sent ✅\nAdmin will contact you soon.");
    navigate("/journeys");
  };

  return (

    <div className="home">

      {/* ✅ SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner booking-banner">
          <div className="banner-overlay"></div>
        </div>

        {/* CONTENT */}
        <div className="content-area booking-layout">

          {/* LEFT */}
          <div className="booking-left">

            <div className="booking-card glass">

              <h2 className="section-title">Booking Contact</h2>

              {/* PROFILE */}
              <div className="profile-box">
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.email}</p>
                </div>
                <button className="change-btn">Change</button>
              </div>

              <h3 className="sub-title">Traveller Details</h3>

              {/* COUNTER */}
              <div className="counter">
                <button onClick={removeTraveller}>−</button>
                <span>{travellers.length}</span>
                <button onClick={addTraveller}>+</button>
              </div>

              {/* TRAVELLERS */}
              {travellers.map((t, i) => (
                <div key={i} className="traveller-box">
                  <input
                    type="text"
                    placeholder={`Traveller ${i + 1} Name`}
                    value={t.name}
                    onChange={(e) =>
                      handleTravellerChange(i, "name", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    value={t.age}
                    onChange={(e) =>
                      handleTravellerChange(i, "age", e.target.value)
                    }
                  />
                </div>
              ))}

              {/* SPECIAL REQUEST */}
              <textarea placeholder="📝 Any special request (optional)"></textarea>

              {/* NOTE */}
              <div className="note-box">
                ⚠️ This is a booking request. Our team will contact you to confirm and complete the process.
              </div>

              {/* BUTTON */}
              <button className="confirm-btn" onClick={handleSubmit}>
                🔒 Send Booking Request
              </button>

            </div>

          </div>


          {/* RIGHT */}
          <div className="booking-right">

            <div className="summary-card glass">

              <h3 className="section-title">Booking Summary</h3>

              <p><strong>Package :</strong> {data.name}</p>
              <p><strong>Duration :</strong> {data.duration}</p>
              <p><strong>Hotel :</strong> {data.hotel}</p>
              <p><strong>Meals :</strong> {data.meals}</p>

              <hr />

              <p><strong>Price / Person :</strong> ₹ {data.price}</p>
              <p><strong>Travellers :</strong> {travellers.length}</p>

              {/* TOTAL */}
              <div className="price-box">
                ₹ {totalCost}
              </div>

              {/* SEATS */}
              <div className={`seat-box ${data.seatsLeft <= 3 ? "low" : ""}`}>
                {data.seatsLeft > 0
                  ? `🔥 Only ${data.seatsLeft} seats left out of ${data.totalSeats}`
                  : "❌ Sold Out"}
              </div>

              {/* TRUST */}
              <div className="trust">
                🔒 Secure Inquiry <br />
                📞 Verified Travel Partner <br />
                ⭐ 4.7 Rated Experience
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Booking;