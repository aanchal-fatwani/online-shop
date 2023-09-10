import React, { useState } from "react";
import "../styles/login.css";
import { loginUser } from "../utils.js";

const Login = () => {
  // const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    // if (!email) {
    //   alert("Please enter your email for login!");
    //   return;
    // }
    // setEmail("");
    if (!mobile) {
      alert("Please enter your mobile for login!");
      return;
    }
    loginUser(mobile);
    setMobile("");
  }

  return (
    <React.Fragment>
      <div className="card" id="card">
        <h1>Sign In</h1>
        <div className="form">
          <label>Enter mobile</label>
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {/* <label>Enter email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)}/> */}
          <button
            onClick={(e) => submitHandler(e)}
            style={{ cursor: "pointer" }}
          >
            Continue
          </button>
        </div>
        <a href="/help" className="icon">
          Need help?
        </a>
      </div>
      <div className="breck">
        <p>New here?</p>
      </div>
      <div className="btn">
        <a href="/register">
          <button style={{ cursor: "pointer" }}>Create your new account</button>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Login;
