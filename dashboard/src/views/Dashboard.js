import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import "../index.css";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "#f1f3f4", padding: "1.5rem 5rem" }}>
      <div style={{ width: "95rem" }}>
        <ImageSlider />
      </div>
    </div>
  );
}
