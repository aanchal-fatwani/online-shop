import React, { useEffect, useRef } from "react";
import { mount } from "categories/CategoriesComponent";
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  let routeParams = useParams();

  useEffect(() => {
    mount(ref.current, navigate, routeParams);
  }, []);

  return <div ref={ref}></div>;
};

export default Categories;
