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

    kashmir: {
      title: "Kashmir Paradise Tour",
      location: "Srinagar, Jammu & Kashmir",
      category: "Nature / Mountains",
      vibe: "Calm, Scenic, Romantic",
      groupType: "Couples, Family, Friends",
      duration: "6 Days / 5 Nights",
      price: "₹28,000",
      travelDates: "10 Apr 2027 – 15 Apr 2027",
      pickup: "Srinagar International Airport",
      dropPoint: "Srinagar International Airport",
      transport: "Private cab + Shikara ride",
      season: "Apr – Jun",
      hotel: "WelcomHeritage Gurkha Houseboats",
      room: "Luxury Lake View Suite",
      meals: "Breakfast + Dinner",
      about:
        "Experience heaven on earth with breathtaking valleys, Dal Lake shikara rides and snow-covered mountains. Visit Gulmarg, Sonmarg and Pahalgam while enjoying peaceful natural beauty.",
      inclusions: [
        "Airport pickup and drop",
        "5 nights stay (hotel + houseboat)",
        "Daily breakfast and dinner",
        "Local sightseeing by private cab",
        "Shikara ride on Dal Lake"
      ],
      itinerary: [
        "Day 1: Arrival Srinagar + Houseboat Stay",
        "Day 2: Gulmarg Visit",
        "Day 3: Sonmarg Trip",
        "Day 4: Pahalgam Tour",
        "Day 5: Local Market + Shikara Ride",
        "Day 6: Departure"
      ]
    },

    amberfort: {
      title: "Amber Fort Royal Tour",
      location: "Jaipur, Rajasthan",
      category: "Heritage / Royal",
      vibe: "Cultural, Grand, Historic",
      groupType: "Family, Couples, Friends",
      duration: "3 Days / 2 Nights",
      price: "₹9,500",
      travelDates: "04 Dec 2026 – 06 Dec 2026",
      pickup: "Jaipur Airport",
      dropPoint: "Jaipur Railway Station",
      transport: "Private cab with guide",
      season: "Oct – Mar",
      hotel: "Alsisar Haveli Jaipur",
      room: "Royal Heritage Room",
      meals: "Breakfast + Dinner",
      about:
        "Explore the royal heritage of Jaipur with a visit to Amber Fort, Nahargarh Fort and Hawa Mahal. Experience traditional markets, local culture and majestic Rajput architecture.",
      inclusions: [
        "Airport/station transfer",
        "2 nights heritage stay",
        "Breakfast and dinner",
        "Local sightseeing",
        "Fort entry assistance"
      ],
      itinerary: [
        "Day 1: Jaipur Arrival + Local Markets",
        "Day 2: Amber Fort + Nahargarh Fort",
        "Day 3: Hawa Mahal + Departure"
      ]
    },

    gateway: {
      title: "Gateway of India City Escape",
      location: "Mumbai, Maharashtra",
      category: "City / Coastal",
      vibe: "Vibrant, Urban, Energetic",
      groupType: "Friends, Couples, Solo",
      duration: "2 Days / 1 Night",
      price: "₹6,000",
      travelDates: "14 Jan 2027 – 15 Jan 2027",
      pickup: "Mumbai Airport",
      dropPoint: "Mumbai Central Station",
      transport: "Private cab + Ferry ride",
      season: "Nov – Feb",
      hotel: "The Gordon House Hotel",
      room: "Sea View Room",
      meals: "Breakfast",
      about:
        "Discover Mumbai’s vibrant lifestyle with a visit to Gateway of India, Marine Drive and Elephanta Caves. Enjoy nightlife, shopping and coastal vibes.",
      inclusions: [
        "Airport/station transfer",
        "1 night hotel stay",
        "Breakfast included",
        "Gateway of India visit",
        "Ferry ride assistance"
      ],
      itinerary: [
        "Day 1: Gateway Visit + Ferry Ride",
        "Day 2: Marine Drive + Shopping + Departure"
      ]
    },
    varanasi: {
      title: "Spiritual Varanasi Journey",
      location: "Varanasi, Uttar Pradesh",
      category: "Spiritual / Cultural",
      vibe: "Calm, Sacred, Traditional",
      groupType: "Family, Solo, Seniors",
      duration: "5 Days / 4 Nights",
      price: "₹14,000",
      travelDates: "08 Oct 2026 – 12 Oct 2026",
      pickup: "Varanasi Junction Railway Station",
      dropPoint: "Lal Bahadur Shastri Airport",
      transport: "Private cab + walking tour",
      season: "Oct – Mar",
      hotel: "BrijRama Palace",
      room: "Premium River Facing Room",
      meals: "Breakfast Only",
      about:
        "Experience the spiritual heart of India in Varanasi. Witness the mesmerizing Ganga Aarti, explore ancient temples and enjoy peaceful boat rides on the sacred Ganges river.",
      inclusions: [
        "Station/airport transfer",
        "4 nights hotel stay",
        "Daily breakfast",
        "Ganga Aarti experience",
        "Boat ride on Ganges",
        "Temple and local market tour"
      ],
      itinerary: [
        "Day 1: Arrival + Evening Ganga Aarti",
        "Day 2: Temple Tour",
        "Day 3: Boat Ride + Local Markets",
        "Day 4: Sarnath Visit",
        "Day 5: Departure"
      ]
    },

    tajmahal: {
      title: "Taj Mahal Heritage Tour",
      location: "Agra, Uttar Pradesh",
      category: "Heritage / Romantic",
      vibe: "Elegant, Historic, Peaceful",
      groupType: "Couples, Family, Friends",
      duration: "2 Days / 1 Night",
      price: "₹2,500",
      travelDates: "20 Nov 2026 – 21 Nov 2026",
      pickup: "Agra Cantt Railway Station",
      dropPoint: "Agra Cantt Railway Station",
      transport: "Private cab + local guide",
      season: "Oct – Feb",
      hotel: "Taj Hotel & Convention Centre",
      room: "Deluxe Mughal Room",
      meals: "Breakfast",
      about:
        "Visit the iconic Taj Mahal, one of the Seven Wonders of the World. Explore Mughal architecture including Agra Fort and enjoy a sunset view from Mehtab Bagh.",
      inclusions: [
        "Pickup and drop",
        "1 night hotel stay",
        "Breakfast included",
        "Local sightseeing by cab",
        "Professional guide support"
      ],
      itinerary: [
        "Day 1: Arrival + Taj Mahal Visit",
        "Day 2: Agra Fort + Local Shopping"
      ]
    },
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