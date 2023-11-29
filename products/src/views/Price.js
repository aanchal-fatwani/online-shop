import React from "react";

export default function Price({ price, discountPercentage }) {
  function getOriginalPrice() {
    return price / (1 - discountPercentage / 100);
  }
  return (
    <div>
      <span
        style={{
          color: "white",
          backgroundColor: "#CC0C39",
          borderRadius: "0.45rem",
          display: "table",
          padding: "0.25rem 1rem",
          fontSize: "1rem",
          fontWeight: "700",
          margin: "1.5rem 0 1rem 0",
        }}
      >
        Deal Of The Day
      </span>
      <span style={{ color: "#CC0C39", fontSize: "2rem" }}>
        - {discountPercentage}%
      </span>
      {price && (
        <>
          <span style={{ fontSize: "2rem" }}>
            {" "}
            Rs.
            {price}
          </span>
          <div
            style={{ color: "#565959", fontSize: "1.2rem", margin: "1rem 0" }}
          >
            M.R.P.:{" "}
            <span style={{ textDecoration: "line-through" }}>
              Rs.{parseInt(getOriginalPrice()).toLocaleString('en-IN')}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
