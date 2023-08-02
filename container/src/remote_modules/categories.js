import React, { useEffect, useRef } from "react";
import { mount } from "categories/CategoriesComponent";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current, navigate);
  }, []);

  return (
    <div ref={ref}></div>
  );
};

export default Categories;
