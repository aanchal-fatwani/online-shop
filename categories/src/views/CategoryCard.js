import React, { useEffect, useState } from "react";
import { getCategoryProducts } from "../apis/Categories.js";

export default function CategoryCard({ category, unslugCategory }) {
  const [topProduct, setTopProduct] = useState({});

  useEffect(() => {
    getCategoryProducts(category).then((res) => {
      setTopProduct(res.products[0]);
    });
  }, []);

  return (
    <a
      href={`/category/${category}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "22rem",
          maxWidth: "22rem",
          minHeight: "25rem",
          maxHeight: "25rem",
          margin: "1.7rem",
        }}
      >
        {topProduct && topProduct?.images?.length && (
          <img
            src={topProduct.images[0]}
            style={{
              minWidth: "20rem",
              maxWidth: "20rem",
              minHeight: "20rem",
              maxHeight: "20rem",
              margin: "0 1rem",
            }}
          />
        )}
        <h3 style={{ margin: "1rem 0", textAlign: "center" }}>
          {unslugCategory}
        </h3>
      </div>
    </a>
  );
}
