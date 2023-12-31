import React from "react";

export default function Price({ price, discountPercentage }) {
  function getOriginalPrice() {
    return price / (1 - discountPercentage / 100);
  }
  return (
    <div style={{ margin: "1rem 0" }}>
      <span style={{ fontSize: "2rem" }}>
        Rs.
        {price.toLocaleString('en-IN')}
      </span>
      <span
        style={{
          color: "#565959",
          textDecoration: "line-through",
          padding: "1rem",
        }}
      >
        Rs.{parseInt(getOriginalPrice()).toLocaleString('en-IN')}
      </span>
    </div>
  );
}
