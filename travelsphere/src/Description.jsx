import React from "react";
import "./Description.css";
import "./Home.css";
import Sidebar from "./Sidebar";   // ✅ ADDED
import { useNavigate, useParams } from "react-router-dom";

function Description() {
  const navigate = useNavigate();
  const { id } = useParams();

  const packages = {
    ladakh: {
      title: "Ladakh Adventure Tour",
      location: "Ladakh, Jammu & Kashmir",
      category: "Adventure / Mountains",
      vibe: "Thrilling, Scenic, High-Altitude",
      groupType: "Friends, Solo, Couples",
      duration: "7 Days / 6 Nights",
      price: "₹70,000",
      travelDates: "15 Jun 2026 – 21 Jun 2026",
      pickup: "Leh Kushok Bakula Rimpochee Airport",
      dropPoint: "Leh Kushok Bakula Rimpochee Airport",
      transport: "Private SUV for local sightseeing + Royal Enfield bike ride for selected routes",
      season: "Jun – Sep",
      hotel: "The Grand Dragon Ladakh, Leh",
      room: "Deluxe Mountain View Room",
      meals: "Breakfast + Dinner",
      about:
        "Embark on a thrilling adventure to Ladakh, a high-altitude cold desert famous for its dramatic Himalayan landscapes, winding roads and crystal-clear lakes. Explore Leh, Nubra Valley and Pangong Lake with a mix of comfort, adventure and unforgettable views.",
      inclusions: [
        "Airport pickup and drop",
        "6 nights hotel stay",
        "Daily breakfast and dinner",
        "Inner line permits",
        "Sightseeing in private vehicle",
        "Experienced local driver"
      ],
      itinerary: [
        "Day 1: Arrival in Leh & Acclimatization",
        "Day 2: Sham Valley Sightseeing",
        "Day 3: Nubra Valley via Khardung La",
        "Day 4: Turtuk Village Exploration",
        "Day 5: Pangong Lake Visit",
        "Day 6: Return to Leh",
        "Day 7: Departure"
      ]
    },

    // (rest unchanged...)
  };

  const data = packages[id];

  if (!data) {
    return <h2 style={{ padding: "40px" }}>Package Not Found</h2>;
  }

  return (
    <div className="home">

      {/* ✅ SIDEBAR COMPONENT */}
      <Sidebar />

      <div className="main">

        <div className="banner description-banner">
          <div className="banner-overlay"></div>
        </div>

        <div className="content-area description-layout">

          <div className="description-left">
            <div className="description-box glass">

              <h3 className="highlight">About this package</h3>
              <p className="text">{data.about}</p>

              <h3 className="highlight">Stay Details</h3>
              <p>🏨 <span>Hotel :</span> {data.hotel}</p>
              <p>🛏️ <span>Room Type :</span> {data.room}</p>
              <p>🍽️ <span>Meals Included :</span> {data.meals}</p>

              <h3 className="highlight">Travel Details</h3>
              <p>📅 <span>Travel Dates :</span> {data.travelDates}</p>
              <p>📍 <span>Pickup Point :</span> {data.pickup}</p>
              <p>📌 <span>Drop Point :</span> {data.dropPoint}</p>
              <p>🚘 <span>Transport :</span> {data.transport}</p>
              <p>👥 <span>Best For :</span> {data.groupType}</p>

              <h3 className="highlight">Inclusions</h3>
              <ul className="inclusion-list">
                {data.inclusions.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>

              <h3 className="highlight">Offered By</h3>
              <p>🌍 Incredible India Tours</p>
              <p>📞 +91 9876543210</p>
              <p>📧 info@indiatours.com</p>

            </div>
          </div>

          <div className="description-right">

            <div className="info-card glass">
              <p><strong>Package Type :</strong> {data.category}</p>
              <p><strong>Duration :</strong> {data.duration}</p>
              <p><strong>Price :</strong> {data.price}</p>
              <p><strong>Transport :</strong> {data.transport}</p>
              <p><strong>Best Season :</strong> {data.season}</p>
              <p><strong>Travel Style :</strong> {data.vibe}</p>
            </div>

            <button
              className="book-btn"
              onClick={() => navigate(`/booking/${id}`)}
            >
              ✨ Book Now
            </button>

            <div className="itinerary-card glass">
              <h3 className="highlight center">Itinerary</h3>

              <ul>
                {data.itinerary.map((day, i) => (
                  <li key={i}>📍 {day}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Description;