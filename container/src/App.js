import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div style={{ backgroundColor: "rgb(227,227,227)", height: "100vh" }}>
      <div>
        <Routes>
          <Route path="/help" />
          <Route
            path="/contact-us"
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
