import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="header">
      <h1 className="main-heading">
        eDUKAAN
      </h1>
      <div style={{ right: "7px" }} className="header-section">
        {
          <>
            <button className="header-tab"> Help </button>
            <button className="header-tab"> Contact Us </button>
          </>
        }
      </div>
    </div>
  );
};

export default App;
