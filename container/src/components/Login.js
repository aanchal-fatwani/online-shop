import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email for login!");
      return;
    }
    setEmail("");
  }

  return (
    <React.Fragment>
      <div className="card" id="card">
        <h1>Sign In</h1>
        <div className="form">
          <label>Enter email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)}/>
          <button onClick={(e) => submitHandler(e)}> Continue </button>
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
          <button> Create your new account</button>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Login;
