import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const App = ({ navigate }) => {
  let customNavigate = navigate;
  if (!navigate) {
    customNavigate = useNavigate();
  }

  return (
    <div className="header">
      <h1 className="main-heading" onClick={() => customNavigate("/")}>
        eDUKAAN
      </h1>
      <div style={{ right: "7px" }} className="header-section">
        {
          <>
            <button className="header-tab" onClick={() => customNavigate("/help")}>
              Help
            </button>
            <button
              className="header-tab"
              onClick={() => customNavigate("/contact-us")}
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
