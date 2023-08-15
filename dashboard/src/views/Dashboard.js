import React from "react";
import ImageSlider from "./ImageSlider";
import "../index.css";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "#f1f3f4", padding: "1.5rem 5rem" }}>
      <div style={{ width: "90rem" }}>
        <ImageSlider />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "5rem 2rem 5rem -2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            minWidth: "22rem",
            margin: "0 1rem",
            padding: "1rem",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0" }}>Styles for Men</h3>
          <a href={`/product/55`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/55/1.jpg"
            />
          </a>
          <a href={`/product/56`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/56/1.jpg"
            />
          </a>
          <a href={`/product/63`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/63/4.jpeg"
            />
          </a>
          <a href={`/product/84`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/84/1.jpg"
            />
          </a>
        </div>
        <div
          style={{
            backgroundColor: "white",
            minWidth: "22rem",
            margin: "0 1rem",
            padding: "1rem",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0" }}>Clearance Store</h3>
          <a href={`/product/35`}>
            <img
              style={{ height: "20rem", width: "20rem" }}
              src="https://i.dummyjson.com/data/products/35/thumbnail.jpg"
            />
          </a>
        </div>
        <div
          style={{
            backgroundColor: "white",
            minWidth: "22rem",
            margin: "0 1rem",
            padding: "1rem",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0" }}>Womens Fashion</h3>
          <a href={`/product/75`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/75/thumbnail.jpg"
            />
          </a>
          <a href={`/product/76`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/76/thumbnail.jpg"
            />
          </a>
          <a href={`/product/70`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/70/1.jpg"
            />
          </a>
          <a href={`/product/47`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/47/3.jpg"
            />
          </a>
        </div>

        <div
          style={{
            backgroundColor: "white",
            minWidth: "22rem",
            margin: "0 1rem",
            padding: "1rem",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0" }}>Revamp your Home in style</h3>
          <a href={`/product/26`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/26/2.jpg"
            />
          </a>
          <a href={`/product/32`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/32/3.jpg"
            />
          </a>
          <a href={`/product/30`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/30/3.jpg"
            />
          </a>
          <a href={`/product/28`}>
            <img
              style={{ height: "10rem", width: "10rem" }}
              src="https://i.dummyjson.com/data/products/28/4.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
