import React, { useEffect, useRef } from "react";
import { mount } from "products/ProductsComponent";
import { useNavigate, useParams } from "react-router-dom";
import { buyHandler, cartHandler } from "../utils";

const Products = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const routeParams = useParams();
  const utils = { buyHandler, cartHandler };

  useEffect(() => {
    mount(ref.current, navigate, routeParams, utils);
  }, []);

  return <div ref={ref}></div>;
};

export default Products;
