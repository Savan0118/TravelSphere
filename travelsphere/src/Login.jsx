import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("Traveller");

  return (

    <div className="login-container">

      <div className="login-box">

        <h2 className="title">
          Welcome to TravelSphere
        </h2>


        {/* NEW SEGMENTED CONTROL ADDED */}
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


        {/* YOUR EXISTING INPUTS */}
        <div className="input-group">

          <label>Enter Email:</label>

          <input type="text" />

        </div>



        <div className="input-group">

          <label>Password:</label>

          <input type="password" />

        </div>



        <div className="forgot">
          Forgot Password?
        </div>



        <button className="login-btn">
          Login
        </button>



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