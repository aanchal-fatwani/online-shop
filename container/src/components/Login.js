import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div className="card" id="card">
        <h1>Sign In</h1>
        <div className="form">
          <label>Enter mobile phone number or email</label>
          <input type="text" />
          <button> Continue</button>
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
