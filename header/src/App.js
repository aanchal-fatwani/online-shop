import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const App = () => {
  let navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="main-heading" onClick={() => navigate("/")}>
        eDUKAAN
      </h1>
      <div style={{ right: "7px" }} className="header-section">
        {
          <>
            <button
              className="header-tab"
              onClick={() => navigate("/help")}
            >
              Help
            </button>
            <button
              className="header-tab"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </button>
          </>
        }
      </div>
    </div>
  );
};

export default App;
