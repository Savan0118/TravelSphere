import React from "react";
import "./Register.css";

function Register() {

  return (

    <div className="register-container">

      <div className="register-box">

        <h2 className="title">
          Welcome to TravelSphere
        </h2>


        <div className="radio-group">

          <label>Register As :</label>

          <input type="radio" name="role" />
          <span> Admin </span>

          <input type="radio" name="role" />
          <span> Traveller </span>

        </div>



        <div className="input-group">

          <label>Name:</label>

          <input type="text" />

        </div>



        <div className="input-group">

          <label>Mobile No:</label>

          <input type="text" />

        </div>



        <div className="input-group">

          <label>Enter Email:</label>

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



        <button className="register-btn">

          Register

        </button>



        <div className="login-link">

          Already have an account ?
          <span> Sign In</span>

        </div>


      </div>

    </div>

  );

}

export default Register;