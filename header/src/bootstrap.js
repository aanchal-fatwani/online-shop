import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const mount = (el, navigate) => {
  const root = createRoot(el);

  root.render(
    <BrowserRouter>
      <App navigate={navigate} />
    </BrowserRouter>
  );
};

if (!window.containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
