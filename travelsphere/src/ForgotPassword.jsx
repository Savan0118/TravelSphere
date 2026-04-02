import React from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleReset = () => {
    // Basic interaction for show
    alert("Password reset link sent to your email!");
    navigate("/");
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="title">Reset Password</h2>

        <div className="input-group">
          <label>Enter Registered Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <button className="forgot-btn" onClick={handleReset}>
          Send Reset Link
        </button>

        <div className="back-to-login">
          Remembered your password?
          <span onClick={() => navigate("/")}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
