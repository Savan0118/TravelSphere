import React, { useState, useEffect } from "react";
import "./Home.css";
import "./AdminBookings.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminBookings() {

  const navigate = useNavigate();

  const [adminImage, setAdminImage] = useState(
    localStorage.getItem("adminProfileImage") || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  );

  useEffect(() => {
    const handleProfileUpdate = () => {
      setAdminImage(localStorage.getItem("adminProfileImage") || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png");
    };
    window.addEventListener("adminProfileUpdated", handleProfileUpdate);
    return () => window.removeEventListener("adminProfileUpdated", handleProfileUpdate);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const initialBookings = [
    { id: "B-001", customer: "Rohan Sharma", package: "Ladakh Adventure Tour", date: "15-04-2025", amount: "₹ 3,50,000", statusClass: "confirmed", statusText: "Confirmed" },
    { id: "B-002", customer: "Priya Trivedi", package: "Varanasi Spiritual Tour", date: "12-04-2025", amount: "₹ 56,000", statusClass: "pending", statusText: "Pending" },
    { id: "B-003", customer: "Anil Kapoor", package: "Manali Adventure Trip", date: "10-04-2025", amount: "₹ 1,20,000", statusClass: "confirmed", statusText: "Confirmed" },
    { id: "B-004", customer: "Santosh Joshi", package: "Taj Mahal Weekend Trip", date: "05-04-2025", amount: "₹ 75,000", statusClass: "confirmed", statusText: "Confirmed" },
    { id: "B-005", customer: "Neha Mehta", package: "Kerala Backwater Trip", date: "31-03-2025", amount: "₹ 4,56,000", statusClass: "cancelled", statusText: "Cancelled" }
  ];

  const filteredBookings = initialBookings.filter((b) =>
    b.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.package.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.statusText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="home">

      {/* SIDEBAR */}
      <AdminSidebar />


      {/* MAIN */}
      <div className="main">

        {/* BANNER */}
        <div className="banner">

          <div className="banner-text">
            <h1>Plan your packages for the world</h1>
            <p>Welcome Back! Admin</p>
          </div>

          <img
            src={adminImage}
            className="profile"
            alt="admin"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/profile")}
          />

        </div>


        {/* CONTENT */}
        <div className="content-area">
          <div className="booking-container">

            <div className="booking-header">

              <h2>Manage Bookings</h2>

              <input
                className="search"
                placeholder="Search Bookings"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((b, index) => (
                      <tr key={index}>
                        <td>{b.id}</td>
                        <td>{b.customer}</td>
                        <td>{b.package}</td>
                        <td>{b.date}</td>
                        <td>{b.amount}</td>
                        <td><span className={`status ${b.statusClass}`}>{b.statusText}</span></td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>No bookings found!</td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

          </div>
        </div>

      </div>

    </div>

  );
}

export default AdminBookings;