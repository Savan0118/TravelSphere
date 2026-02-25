import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [role, setRole] = useState("Traveller");

  const [showPopup, setShowPopup] = useState(false);


  const handleRegister = () => {

    setShowPopup(true);

  };


  const handleOK = () => {

    navigate("/");

  };


  return (

    <div className="register-container">

      <div className="register-box">

        <h2 className="title">
          Welcome to TravelSphere
        </h2>


        {/* SEGMENTED CONTROL ADDED */}
        <div className="segmented-container">

          <label className="segmented-label">
            Register As:
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


        {/* EXISTING INPUTS */}

        <div className="input-group">
          <label>Name:</label>
          <input type="text" />
        </div>


        <div className="input-group">
          <label>Mobile No:</label>
          <input type="text" />
        </div>


        <div className="input-group">
          <label>Email:</label>
          <input type="email" />
        </div>


        <div className="input-group">
          <label>Password:</label>
          <input type="password" />
        </div>


        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" />
        </div>



        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>



        <div className="login-link">

          Already have an account ?

          <span onClick={() => navigate("/")}>
            Sign In
          </span>

        </div>


      </div>



      {showPopup && (

        <div className="popup">

          <div className="popup-box">

            <h3>TravelSphere says</h3>

            <p>Registration Successful</p>

            <button onClick={handleOK}>OK</button>

          </div>

        </div>

      )}


    </div>

  );

}

export default Register;