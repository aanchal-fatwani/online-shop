import React, { useState } from "react";
import "../styles/login.css";
import { addNewUser } from "../utils.js";

const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!name || !mobile || !password) {
      alert("Please enter required details!");
      return;
    }
    if (!/[7-9][0-9]{9}/.test(parseInt(mobile))) {
      alert("Please enter valid mobile number!");
      return;
    }
    if (!/.{8,}/.test(parseInt(password))) {
      alert("The minimum password length is 8!");
      return;
    }
    addNewUser(name, mobile, email, password);
    setName("");
    setMobile("");
    setEmail("");
    setPassword("");
  }

  return (
    <React.Fragment>
      <div className="card card-reg" id="card">
        <h1>Create Account</h1>
        <div className="form">
          <label>Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submitHandler(e);
              }
            }}
          />
          <label>Mobile number</label>
          <input
            type="text"
            maxLength="10"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submitHandler(e);
              }
            }}
          />
          <label>Email (optional)</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submitHandler(e);
              }
            }}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submitHandler(e);
              }
            }}
          />
          <button
            style={{ cursor: "pointer" }}
            onClick={(e) => submitHandler(e)}
          >
            Continue
          </button>
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
