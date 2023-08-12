import React, { useEffect, useRef } from "react";
import { mount } from "products/ProductsComponent";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  let routeParams = useParams();
  console.log(routeParams.productId)

  useEffect(() => {
    mount(ref.current, navigate, routeParams);
  }, []);

  return (
    <div ref={ref}></div>
  );
};

export default Products;
