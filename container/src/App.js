import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./remote_modules/header";
import Help from "./components/Help";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div style={{ backgroundColor: "rgb(227,227,227)", height: "100vh" }}>
      <Header />
      <div>
        <Routes>
          <Route path="/help" element={<Help />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
