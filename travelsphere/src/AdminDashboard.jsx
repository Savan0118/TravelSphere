import React, { useState, useEffect } from "react";
import "./Home.css";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminDashboard() {

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

                              {/* STATS */}
                              <div className="admin-stats">

                                    <div className="stat-card">
                                          <p>Total Packages</p>
                                          <h2>24</h2>
                                    </div>

                                    <div className="stat-card">
                                          <p>Total Destinations</p>
                                          <h2>24</h2>
                                    </div>

                                    <div className="stat-card">
                                          <p>Total Bookings</p>
                                          <h2>24</h2>
                                    </div>

                              </div>


                              {/* BOOKINGS + ACTION */}
                              <div className="admin-layout">

                                    {/* TABLE */}
                                    <div className="booking-table">

                                          <h2>Recent Bookings</h2>

                                          <table>

                                                <thead>
                                                      <tr>
                                                            <th>User</th>
                                                            <th>Package</th>
                                                            <th>Persons</th>
                                                            <th>Payment Status</th>
                                                      </tr>
                                                </thead>

                                                <tbody>

                                                      <tr>
                                                            <td>Rina Shah</td>
                                                            <td>Ladakh Adventure Tour</td>
                                                            <td>5</td>
                                                            <td>₹ 3,50,000</td>
                                                      </tr>

                                                      <tr>
                                                            <td>Amit Varma</td>
                                                            <td>Varanasi Spiritual Tour</td>
                                                            <td>4</td>
                                                            <td>₹ 56,000</td>
                                                      </tr>

                                                      <tr>
                                                            <td>Adna Patel</td>
                                                            <td>Manali Adventure Trip</td>
                                                            <td>10</td>
                                                            <td>₹ 1,20,000</td>
                                                      </tr>

                                                      <tr>
                                                            <td>Sneha Roy</td>
                                                            <td>Taj Mahal Weekend Trip</td>
                                                            <td>3</td>
                                                            <td>₹ 75,000</td>
                                                      </tr>

                                                      <tr>
                                                            <td>Krish Banerjee</td>
                                                            <td>Kerala Backwater Trip</td>
                                                            <td>6</td>
                                                            <td>₹ 4,56,000</td>
                                                      </tr>

                                                </tbody>

                                          </table>

                                    </div>


                                    {/* ACTION BUTTONS */}
                                    <div className="admin-actions">

                                          <button onClick={() => navigate("/admin/add")}>
                                                Add Package
                                          </button>

                                          <button onClick={() => navigate("/admin/packages")}>
                                                View Packages
                                          </button>

                                          <button onClick={() => navigate("/admin/bookings")}>
                                                View all Bookings
                                          </button>

                                    </div>

                              </div>

                        </div>

                  </div>

            </div>

      )

}

export default AdminDashboard;