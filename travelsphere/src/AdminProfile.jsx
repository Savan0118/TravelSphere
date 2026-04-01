import React, { useState } from "react";
import "./Home.css";
import "./AdminProfile.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminProfile() {
    const navigate = useNavigate();

    const [image, setImage] = useState(
        localStorage.getItem("adminProfileImage") || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    );

    const [profile] = useState(() => {
        return JSON.parse(localStorage.getItem("adminProfileData")) || {
            name: "Admin User",
            email: "admin@travelsphere.com",
            role: "System Administrator",
            managedPackages: 24,
            managedBookings: 156
        };
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                localStorage.setItem("adminProfileImage", reader.result);
                // Dispatch custom event to update profile images across the app
                window.dispatchEvent(new Event("adminProfileUpdated"));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="home">
            <AdminSidebar />

            <div className="main">
                <div className="banner">
                    <div className="banner-text">
                        <h1>Admin Profile</h1>
                        <p>Manage administrator account</p>
                    </div>
                </div>

                <div className="content-area">
                    <div className="profile-header">
                        <label className="profile-upload">
                            <img src={image} className="profile-avatar" alt="admin profile" />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                hidden
                            />
                        </label>

                        <div>
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <p>{profile.role}</p>
                        </div>
                    </div>

                    <div className="profile-grid">
                        <div className="profile-card">
                            <h3>Administrator Details</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email: {profile.email}</p>
                            <p>Role: {profile.role}</p>
                        </div>

                        <div className="profile-card">
                            <h3>System Stats</h3>
                            <p>Managed Packages: {profile.managedPackages}</p>
                            <p>Total Bookings Processed: {profile.managedBookings}</p>
                        </div>
                    </div>

                    <button className="edit-btn" onClick={() => navigate("/admin/edit-profile")}>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminProfile;
