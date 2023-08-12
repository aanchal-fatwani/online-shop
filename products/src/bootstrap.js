import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Products from "./views/Products";

const mount = (el, navigate, routeParams) => {
  const root = createRoot(el);
  root.render(
    <BrowserRouter>
      <Products routeParams={routeParams} />
    </BrowserRouter>
  );
};

if (!window.containerContext) mount(document.getElementById("root"));

export { mount };
