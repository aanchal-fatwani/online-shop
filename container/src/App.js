import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./remote_modules/header";

const App = () => {
  return (
    <div style={{ backgroundColor: "rgb(227,227,227)", height: "100vh" }}>
      <Header />
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
