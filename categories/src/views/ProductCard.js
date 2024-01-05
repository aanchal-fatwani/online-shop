import React from "react";
import Rating from "@mui/material/Rating";
import Price from "./Price";
export default function ProductCard({ details }) {
  const { thumbnail, title, brand, price, discountPercentage, rating, id } = details;

  return (
    <div style={{ margin: "1.5rem" }}>
      <a href={`/product/${id}`}>
        <img
          src={`${thumbnail}`}
          style={{
            height: "16rem",
            width: "16rem",
            margin: "1.5rem 0",
            borderRadius: "0.5rem",
          }}
        />
      </a>
      <div style={{ fontSize: "1.5rem", maxWidth: "16rem" }}>
        <a href={`/product/${id}`}>
          <b>{title}</b>
        </a>
      </div>
      <div style={{ color: "#565959", margin: "1rem 0", fontSize: "1.2rem" }}>
        {brand}
      </div>
      <Price price={price * 85} discountPercentage={discountPercentage} />
      <div style={{ fontSize: "1.2rem" }}>
        <span style={{ margin: "0.5rem", verticalAlign: "top" }}>{rating}</span>
        <Rating value={parseInt(rating)} readOnly size="medium" />
      </div>
    </div>
  );
}
