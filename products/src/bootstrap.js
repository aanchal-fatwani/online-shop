import React from "react";
import { createRoot } from "react-dom/client";
import Products from "./views/Products";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<Products />);
};

if (!window.containerContext) mount(document.getElementById("root"));

export { mount };
