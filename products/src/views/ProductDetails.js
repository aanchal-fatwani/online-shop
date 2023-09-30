import React from "react";
import Rating from "@mui/material/Rating";
import Price from "./Price";
import BuyOptions from "./BuyOptions";

export default function ProductDetails({ details, utils }) {
  const {
    id,
    brand,
    title,
    rating,
    price,
    discountPercentage,
    description,
    stock,
    images,
  } = details;
  
  return (
    <div style={{ padding: "4rem" }}>
      <div
        style={{
          color: "#007185",
          fontSize: "1.2rem",
        }}
      >
        Brand: {brand}
      </div>
      <div style={{ margin: "0.8rem 0", fontSize: "3rem" }}>{title}</div>
      <div style={{ fontSize: "1.5rem" }}>
        <span style={{ margin: "0.5rem", verticalAlign: "top" }}>{rating}</span>
        <Rating value={parseInt(rating)} readOnly size="large" />
      </div>
      <Price
        price={price && price * 10}
        discountPercentage={discountPercentage}
      />
      <div>{description}</div>
      <BuyOptions
        id={id}
        title={title}
        image={images?.[0]}
        price={price && price * 10}
        stock={stock}
        utils={utils}
      />
    </div>
  );
}
