import React from "react";
import "./Home.css";
import "./TripDetails.css";
import Sidebar from "./Sidebar";
import { useParams, useNavigate } from "react-router-dom";

function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trips = {
    ladakh: {
      title: "Ladakh Expedition",
      location: "Leh, Ladakh",
      status: "Upcoming",
      dates: "15 Apr 2024 — 21 Apr 2024",
      travellers: 5,
      type: "Family Trip",
      price: "₹70,000",
      image: "/Images/ladakh.png",
      hotel: "The Grand Dragon Ladakh",
      transport: "Flight + SUV",
      notes: "Carry warm clothes and ID proof."
    },

    varanasi: {
      title: "Varanasi Spiritual Tour",
      location: "Varanasi, Uttar Pradesh",
      status: "Upcoming",
      dates: "2 May 2024 — 6 May 2024",
      travellers: 4,
      type: "Friends Trip",
      price: "₹25,000",
      image: "/Images/varanasi.png",
      hotel: "Ganges View Hotel",
      transport: "Train + Local Auto",
      notes: "Attend Ganga Aarti in evening."
    },

    taj: {
      title: "Taj Mahal Visit",
      location: "Agra, Uttar Pradesh",
      status: "Completed",
      dates: "15 Jan 2025 — 22 Jan 2025",
      travellers: 1,
      type: "Solo Trip",
      price: "₹15,000",
      image: "/Images/taj_mahal.jpeg",
      hotel: "Radisson Agra",
      transport: "Train",
      notes: "Visited at sunrise."
    }
  };

  const data = trips[id];

  if (!data) return <h2 style={{ padding: "40px" }}>Trip Not Found</h2>;

  return (
    <div className="home">

      <Sidebar />

      <div className="main trip-scroll">

        {/* Banner */}
        <div
          className="banner"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="banner-text">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
          </div>
        </div>

        {/* Content */}
        <div className="content-area">

          {/* STATUS CARD */}
          <div className="trip-card-detail">

            <div className="trip-header">
              <h2>{data.title}</h2>
              <span className={`status ${data.status.toLowerCase()}`}>
                {data.status}
              </span>
            </div>

            <p><strong>📅 Dates:</strong> {data.dates}</p>
            <p><strong>📍 Location:</strong> {data.location}</p>
            <p><strong>👥 Travellers:</strong> {data.travellers}</p>
            <p><strong>🧳 Trip Type:</strong> {data.type}</p>

            <hr />

            <p><strong>🏨 Hotel:</strong> {data.hotel}</p>
            <p><strong>🚘 Transport:</strong> {data.transport}</p>

            <p className="note">📝 {data.notes}</p>

            <div className="price-box">
              {data.price}
            </div>

            {/* ACTIONS */}
            <div className="action-buttons">

              {data.status === "Upcoming" ? (
                <button className="cancel-btn">Cancel Trip</button>
              ) : (
                <button className="review-btn">Write Review</button>
              )}

              <button
                className="back-btn"
                onClick={() => navigate("/journeys")}
              >
                ← Back
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TripDetails;