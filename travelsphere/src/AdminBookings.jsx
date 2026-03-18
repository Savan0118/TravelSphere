import React from "react";
import "./AdminBookings.css";
import { useNavigate } from "react-router-dom";

function AdminBookings() {

  const navigate = useNavigate();

  return (

    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="sidebar-top">

          <h2 className="logo">TravelSphere</h2>

          <p className="tagline">
            Your best companion to travel around the world
          </p>

          <ul className="menu">

            <li onClick={() => navigate("/admin")}>
              🏠 Dashboard
            </li>

            <li onClick={() => navigate("/admin/packages")}>
              🔎 Packages
            </li>

            <li className="active">
              💼 Bookings
            </li>

            <li onClick={() => navigate("/admin/about")}>
              ℹ️ About Us
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
      <div className="admin-main">

        {/* BANNER */}
        <div className="banner admin-banner">

          <div className="banner-text">
            <h1>Plan your packages for the world</h1>
            <p>Welcome Back! Admin</p>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            className="profile"
            alt="admin"
          />

        </div>


        {/* CONTENT */}
        <div className="booking-container">

          <div className="booking-header">

            <h2>Manage Bookings</h2>

            <input
              className="search"
              placeholder="Search Bookings"
            />

          </div>


          <div className="table-box">

            <table>

              <thead>
                <tr>
                  <th>Booking Id</th>
                  <th>Customer Name</th>
                  <th>Package Name</th>
                  <th>Booking Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>B-001</td>
                  <td>Rohan Sharma</td>
                  <td>Ladakh Adventure Tour</td>
                  <td>15-04-2025</td>
                  <td>₹ 3,50,000</td>
                  <td><span className="status confirmed">Confirmed</span></td>
                </tr>

                <tr>
                  <td>B-002</td>
                  <td>Priya Trivedi</td>
                  <td>Varanasi Spiritual Tour</td>
                  <td>12-04-2025</td>
                  <td>₹ 56,000</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>

                <tr>
                  <td>B-003</td>
                  <td>Anil Kapoor</td>
                  <td>Manali Adventure Trip</td>
                  <td>10-04-2025</td>
                  <td>₹ 1,20,000</td>
                  <td><span className="status confirmed">Confirmed</span></td>
                </tr>

                <tr>
                  <td>B-004</td>
                  <td>Santosh Joshi</td>
                  <td>Taj Mahal Weekend Trip</td>
                  <td>05-04-2025</td>
                  <td>₹ 75,000</td>
                  <td><span className="status confirmed">Confirmed</span></td>
                </tr>

                <tr>
                  <td>B-005</td>
                  <td>Neha Mehta</td>
                  <td>Kerala Backwater Trip</td>
                  <td>31-03-2025</td>
                  <td>₹ 4,56,000</td>
                  <td><span className="status cancelled">Cancelled</span></td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminBookings;