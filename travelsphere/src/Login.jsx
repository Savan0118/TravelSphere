import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (

    <div className="login-container">

      <div className="login-box">

        <h2 className="title">
          Welcome to TravelSphere
        </h2>


        <div className="radio-group">

          <label>Login As :</label>

          <input type="radio" name="role" />
          <span> Admin </span>

          <input type="radio" name="role" />
          <span> Traveller </span>

        </div>



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