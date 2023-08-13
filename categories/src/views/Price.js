import React from "react";

export default function Price({ price, discountPercentage }) {
  function getOrgPrice() {
    return price / (1 - discountPercentage / 100);
  }
  return (
    <div style={{ margin: "1rem 0" }}>
      <span style={{ fontSize: "2rem" }}>
        Rs.
        {price}
      </span>
      <span
        style={{
          color: "#565959",
          textDecoration: "line-through",
          padding: "1rem",
        }}
      >
        Rs.{parseInt(getOrgPrice())}
      </span>
    </div>
  );
}
