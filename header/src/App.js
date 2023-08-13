import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { getAllCategories } from "./apis/Categories";

const App = ({ navigate }) => {
  let customNavigate = navigate;
  if (!navigate) {
    customNavigate = useNavigate();
  }

  const unslugify = (slug) =>
    slug
      .replace(/\-/g, " ")
      .replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      );

  const [categoryTabs, setCategoryTabs] = useState([]);
  useEffect(() => {
    let categories = getAllCategories();
    categories.then((response) => {
      let res = response.slice(0, 9);
      res = res.map((el) => (
        <div>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`/category/${el}`}
          >
            {unslugify(el)}
          </a>
        </div>
      ));
      setCategoryTabs(res);
    });
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="main-heading" onClick={() => customNavigate("/")}>
          eDUKAAN
        </h1>
        <div style={{ right: "7px" }} className="header-section">
          {
            <>
              <button
                className="header-tab"
                onClick={() => customNavigate("/help")}
              >
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
      <div
        style={{
          backgroundColor: "#232f3e",
          color: "white",
          padding: "0.8rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {categoryTabs}
      </div>
    </div>
  );
};

export default App;
