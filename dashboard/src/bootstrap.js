import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./views/Dashboard";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<Dashboard />);
};

if (!window.containerContext) mount(document.getElementById("root"));

export { mount };
