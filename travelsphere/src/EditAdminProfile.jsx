import React, { useState } from "react";
import "./Home.css";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function EditAdminProfile() {
    const navigate = useNavigate();

    const [form, setForm] = useState(() => {
        return JSON.parse(localStorage.getItem("adminProfileData")) || {
            name: "Admin User",
            email: "admin@travelsphere.com",
            role: "System Administrator",
            managedPackages: 24,
            managedBookings: 156
        };
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        localStorage.setItem("adminProfileData", JSON.stringify(form));
        navigate("/admin/profile");
    };

    return (
        <div className="home">
            <AdminSidebar />

            <div className="main">
                <div className="banner profile-banner">
                    <div className="banner-text">
                        <h1>Edit Admin Profile</h1>
                        <p>Update administrator access details</p>
                    </div>
                </div>

                <div className="content-area">
                    <div className="edit-card">
                        <div className="form-row">
                            <label>Name :</label>
                            <input name="name" value={form.name} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>Email :</label>
                            <input name="email" value={form.email} type="email" onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>Role :</label>
                            <input name="role" value={form.role} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>Managed Packages :</label>
                            <input name="managedPackages" type="number" value={form.managedPackages} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>Total Bookings Processed :</label>
                            <input name="managedBookings" type="number" value={form.managedBookings} onChange={handleChange} />
                        </div>

                        <button className="save-btn" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditAdminProfile;
