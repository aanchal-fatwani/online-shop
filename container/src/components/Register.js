import React, { useState } from "react";
import "../styles/login.css";

const Register = () => {
  return (
    <React.Fragment>
      <div className="card card-reg" id="card">
        <h1>Create Account</h1>
        <div className="form">
          <label>Your name</label>
          <input type="text" />
          <label>Mobile number</label>
          <input type="text" />
          <label>Email (optional)</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button style={{ cursor: "pointer" }}> Continue </button>
        </div>
        <p>
          Already have an account? &nbsp;
          <a href="/login" className="icon">
            Sign in
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Register;
