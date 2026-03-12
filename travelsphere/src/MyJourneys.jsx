import React from "react";
import "./MyJourneys.css";
import { useNavigate } from "react-router-dom";

function MyJourneys(){

const navigate = useNavigate();

return(

<div className="journey-page">

{/* SIDEBAR */}
<div className="journey-sidebar">

<h2 className="journey-logo">TravelSphere</h2>

<p className="journey-tag">
Your best companion to travel around the world
</p>

<ul className="journey-menu">

<li onClick={()=>navigate("/home")}>🏠 Home</li>
<li onClick={()=>navigate("/search")}>🔎 Search</li>
<li className="active">🗺️ My Journeys</li>
<li onClick={()=>navigate("/budget")}>💰 Budget Planner</li>
<li onClick={()=>navigate("/about")}>ℹ️ About Us</li>
<li onClick={()=>navigate("/weather")}>🌦️ Weather</li>

</ul>

<div className="journey-logout" onClick={()=>navigate("/")}>
⏻ Log Out
</div>

</div>


{/* MAIN */}
<div className="journey-main">

<div className="journey-banner">

<h1>Completed My Adventure</h1>
<p>Explore the world with ease</p>

</div>


<div className="journey-content">

<h2 className="section-title">My Trips</h2>


{/* CARD 1 */}
<div className="trip-card">

<span className="status upcoming">Upcoming</span>

<img src="/Images/Home_Img.png" />

<div className="trip-info">

<h3>Ladakh</h3>
<p>15 Apr 2024 — 21 Apr 2024</p>
<p className="location">📍 Leh, Ladakh</p>

<button className="view-btn">View Details</button>

</div>

</div>


{/* CARD 2 */}
<div className="trip-card">

<span className="status upcoming">Upcoming</span>

<img src="/Images/Home_Img.png" />

<div className="trip-info">

<h3>Varanasi (Kashi)</h3>
<p>2 May 2024 — 6 May 2024</p>
<p className="location">📍 Kochi, Kerala</p>

<button className="view-btn">View Details</button>

</div>

</div>


{/* CARD 3 */}
<div className="trip-card">

<span className="status completed">Completed</span>

<img src="/Images/Home_Img.png" />

<div className="trip-info">

<h3>Taj Mahal</h3>
<p>15 Jan 2025 — 22 Jan 2025</p>
<p className="location">📍 Agra, Uttar Pradesh</p>

<button className="view-btn">View Details</button>

</div>

</div>

</div>

</div>

</div>

)

}

export default MyJourneys;