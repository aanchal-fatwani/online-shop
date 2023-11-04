import React, { useState } from "react";

function ImageViewer({ images }) {
  const [currentImg, setCurrentImg] = useState("");

  function hoverHandler(ev, id) {
    setCurrentImg(id);
    ev.target.style.boxShadow = "0 0 0 5px #91dce9";
  }

  function outHandler(ev, id) {
    setCurrentImg(id);
    ev.target.style.boxShadow = "";
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
      >
        {images?.length > 1 &&
          images.map((el) => (
            <img
              src={el}
              onMouseLeave={(ev) => outHandler(ev, el)}
              onMouseOver={(ev) => hoverHandler(ev, el)}
              style={{
                maxWidth: "5rem",
                minHeight: "5rem",
                maxHeight: "5rem",
                margin: "1rem",
                borderRadius: "1rem",
              }}
            />
          ))}
      </div>
      <div
        style={{
          margin: "3rem 4rem",
          minWidth: "32rem",
          maxWidth: "32rem",
          maxHeight: "32rem",
          minHeight: "32rem",
        }}
      >
        <img
          src={currentImg || (images && images[0])}
          style={{ height: "32rem", width: "32rem" }}
        />
      </div>
    </div>
  );
}

export default ImageViewer;
