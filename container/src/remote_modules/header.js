import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderComponent";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current, navigate);
  }, []);

  return (
    <div ref={ref}></div>
  );
};

export default Header;
