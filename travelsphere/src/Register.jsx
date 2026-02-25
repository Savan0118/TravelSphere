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


        <div className="segmented-container">

          <label className="segmented-label">
            Register As :
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



        <div className="input-group">

          <label>Name:</label>

          <input type="text" placeholder="Enter your full name"/>

        </div>



        <div className="input-group">

          <label>Mobile No:</label>

          <input type="text" placeholder="Enter your mobile number"/>

        </div>



        <div className="input-group">

          <label>Email:</label>

          <input type="email" placeholder="Enter your email address"/>

        </div>



        <div className="input-group">

          <label>Password:</label>

          <input type="password" placeholder="Enter your password"/>

        </div>



        <div className="input-group">

          <label>Confirm Password:</label>

          <input type="password" placeholder="Re-enter your password"/>

        </div>



        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Register
        </button>



        {/* CLICKABLE SIGN IN */}

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

            <button onClick={handleOK}>
              OK
            </button>

          </div>

        </div>

      )}

    </div>

  );

}

export default Register;