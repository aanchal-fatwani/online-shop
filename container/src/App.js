import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./remote_modules/header";
const Dashboard = lazy(() => import("./remote_modules/dashboard"));
import Help from "./components/Help";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div style={{ backgroundColor: "rgb(227,227,227)", height: "100vh" }}>
      <Header />
      <div>
        <Suspense
          fallback={
            <div style={{ top: "50%", position: "absolute", left: "48%" }}>
              Loading...
            </div>
          }
        >

          <Routes>
            <Route path="/help" element={<Help />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/"
              exact
              element={
                <Dashboard />
              }
            />
          </Routes>

        </Suspense>
      </div>
    </div>
  );
};

export default App;
