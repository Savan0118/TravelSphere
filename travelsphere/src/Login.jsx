import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("Traveller");

  const handleLogin = () => {

    // ⭐ ROLE BASED ROUTING
    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }

  };

  return (

    <div className="login-container">

      <div className="login-box">

        <h2 className="title">
          Welcome to TravelSphere
        </h2>

        {/* Segmented Control */}

        <div className="segmented-container">

          <label className="segmented-label">
            Login As:
          </label>

          <div className="segmented-control">

            <button
              className={role === "Admin" ? "segment active" : "segment"}
              onClick={() => setRole("Admin")}
            >
              Admin
            </button>

            <button
              className={role === "Traveller" ? "segment active" : "segment"}
              onClick={() => setRole("Traveller")}
            >
              Traveller
            </button>

          </div>

        </div>

        {/* Email */}

        <div className="input-group">
          <label>Enter Email:</label>
          <input type="text" placeholder="Enter your email" />
        </div>

        {/* Password */}

        <div className="input-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="forgot" onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <div style={{ margin: "15px 0", display: "flex", justifyContent: "center" }}>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              try {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log("Decoded User Info:", decoded);
                
                const profileData = {
                  name: decoded.name,
                  email: decoded.email,
                };
                localStorage.setItem("profileData", JSON.stringify(profileData));
                
                if (decoded.picture) {
                  localStorage.setItem("profileImage", decoded.picture);
                }
              } catch (error) {
                console.error("Error decoding token:", error);
              }

              if (role === "Admin") {
                navigate("/admin");
              } else {
                navigate("/home");
              }
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>

        <div className="register">
          Don’t have an account ?
          <span onClick={() => navigate("/register")}>
            Register
          </span>
        </div>

      </div>

    </div>

  );

}

export default Login;