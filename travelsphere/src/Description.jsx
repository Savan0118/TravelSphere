import React from "react";
import "./Description.css";
import { useNavigate, useParams } from "react-router-dom";

function Description() {

  const navigate = useNavigate();
  const { id } = useParams();

  const packages = {

    ladakh: {
      title: "Ladakh Adventure Tour",
      location: "Ladakh, Jammu & Kashmir",
      duration: "7 Days",
      price: "₹70,000",
      transport: "Jeep + Bike",
      season: "Jun – Sep",
      hotel: "River View Resort",
      room: "Deluxe Mountain View Room",
      meals: "Breakfast, Lunch",
      about:
        "Embark on a thrilling adventure to Ladakh, a high-altitude cold desert famous for its stark Himalayan landscapes. Explore Leh, Nubra Valley and Pangong Lake.",
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

    varanasi: {
      title: "Spiritual Varanasi Journey",
      location: "Varanasi, Uttar Pradesh",
      duration: "5 Days",
      price: "₹14,000",
      transport: "Train + Cab",
      season: "Oct – Mar",
      hotel: "Ganga View Residency",
      room: "Premium River Facing Room",
      meals: "Breakfast Only",
      about:
        "Experience the spiritual essence of India in Varanasi. Witness mesmerizing Ganga Aarti, explore ancient temples and enjoy peaceful boat rides on the sacred Ganges river.",
      itinerary: [
        "Day 1: Arrival & Evening Ganga Aarti",
        "Day 2: Temple Tour",
        "Day 3: Boat Ride + Local Markets",
        "Day 4: Sarnath Excursion",
        "Day 5: Departure"
      ]
    },

    tajmahal: {
      title: "Taj Mahal Heritage Tour",
      location: "Agra, Uttar Pradesh",
      duration: "2 Days",
      price: "₹2500",
      transport: "Bus + Local Guide",
      season: "Oct – Feb",
      hotel: "Heritage Stay Agra",
      room: "Deluxe Mughal Room",
      meals: "Breakfast",
      about:
        "Visit the world-famous Taj Mahal and explore Mughal architecture including Agra Fort and Mehtab Bagh sunset point.",
      itinerary: [
        "Day 1: Arrival & Taj Mahal Visit",
        "Day 2: Agra Fort + Local Shopping"
      ]
    }

  };

  const data = packages[id];

  if (!data) {
    return <h2 style={{ padding: "40px" }}>Package Not Found</h2>;
  }

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
            <li onClick={() => navigate("/budget")}>💰 Budget Planner</li>
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

        <div className="banner description-banner">

          <div className="banner-text">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
          </div>

        </div>


        <div className="content-area description-layout">

          {/* LEFT */}
          <div className="description-left">

            <div className="description-box">

              <h3 className="highlight">About this package</h3>
              <p>{data.about}</p>

              <h3 className="highlight">Stay Details</h3>
              <p>Hotel : {data.hotel}</p>
              <p>Room Type : {data.room}</p>
              <p>Meals Included : {data.meals}</p>

              <h3 className="highlight">Offered By</h3>
              <p>Incredible India Tours</p>
              <p>+91 9876543210</p>
              <p>info@indiatours.com</p>

            </div>

          </div>


          {/* RIGHT */}
          <div className="description-right">

            <div className="info-card">

              <p><strong>Duration :</strong> {data.duration}</p>
              <p><strong>Price :</strong> {data.price}</p>
              <p><strong>Transport :</strong> {data.transport}</p>
              <p><strong>Best Season :</strong> {data.season}</p>

            </div>

            <button className="book-btn"
            onClick={()=>navigate(`/booking/${id}`)}>
                Book Now
            </button>

            <div className="itinerary-card">

              <h3 className="highlight center">Itinerary</h3>

              <ul>
                {data.itinerary.map((day, i) =>
                  <li key={i}>{day}</li>
                )}
              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Description;