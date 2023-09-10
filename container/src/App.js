import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./remote_modules/header";
const Dashboard = lazy(() => import("./remote_modules/dashboard"));
const Categories = lazy(() => import("./remote_modules/categories"));
const Products = lazy(() => import("./remote_modules/products"));
import Help from "./components/Help";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
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
            <Route path="/contact-us" exact element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category/:category" element={<Categories />} />
            <Route path="/product/:productId" element={<Products />} />
            <Route path="/" exact element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
