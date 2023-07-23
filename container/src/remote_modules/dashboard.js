import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardComponent";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current, navigate);
  }, []);

  return (
    <div ref={ref}></div>
  );
};

export default Dashboard;
