import React, { useEffect, useState } from "react";
import { getCategoryProducts } from "./apis/Categories.js";
import ProductCard from "./views/ProductCard";

const App = ({ routeParams }) => {
  const { category } = routeParams;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategoryProducts(category).then((res) => {
      let prods = res.products;
      prods = prods.map((el) => <ProductCard details={el} />);
      setProducts(prods);
    });
  }, []);
  const unslugify = (slug) =>
    slug
      .replace(/\-/g, " ")
      .replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      );
  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", margin: "2.5rem 1rem 2rem 2.5rem" }}>
        {unslugify(category)}
      </h1>
      <div style={{ display: "flex", flexDirection: "row", margin: "1rem" }}>
        {products}
      </div>
    </div>
  );
};

export default App;
