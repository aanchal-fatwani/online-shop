import React, { useEffect, useState } from "react";
import { getCategoryProducts, getAllCategories } from "./apis/Categories.js";
import ProductCard from "./views/ProductCard";
import CategoryCard from "./views/CategoryCard";

const App = ({ routeParams }) => {
  const { category } = routeParams;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const unslugify = (slug) =>
    slug
      .replace(/\-/g, " ")
      .replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      );

  useEffect(() => {
    if (category === "all") {
      getAllCategories().then((res) => {
        let cats = res.map((el) => (
          <CategoryCard category={el} unslugCategory={unslugify(el)} />
        ));
        setCategories(cats);
      });
    } else {
      getCategoryProducts(category).then((res) => {
        let prods = res.products;
        prods = prods.map((el) => <ProductCard details={el} />);
        setProducts(prods);
      });
    }
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", margin: "2.5rem 1rem 2rem 2.5rem" }}>
        {unslugify(category)}
      </h1>
      {products && (
        <div style={{ display: "flex", flexDirection: "row", margin: "1rem" }}>
          {products}
        </div>
      )}
      {categories && (
        <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem" }}>
          {categories}
        </div>
      )}
    </div>
  );
};

export default App;
