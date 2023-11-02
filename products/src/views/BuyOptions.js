import React, { useState, useEffect } from "react";

export default function BuyOptions({ utils, id, title, image, price, stock }) {
  const [originalStock, setOriginalStock] = useState(stock);
  const [updatedStock, setUpdatedStock] = useState(stock);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const stockMarkedDown = stock > 100 ? parseInt(stock / 10) : stock;
    setOriginalStock(stockMarkedDown);
    setUpdatedStock(stockMarkedDown - 1);
  }, [stock]);

  function quantityHandler(e) {
    setQuantity(e.target.value);
    let newValue = originalStock - e.target.value;
    setUpdatedStock(newValue);
  }

  function quantityOptions() {
    let qtyOptions = [];
    for (let i = 0; i < (stock > 5 ? 5 : stock); i++) {
      qtyOptions.push(<option value={`${i}`}>{i}</option>);
    }
    return qtyOptions;
  }

  let buttonStyles = {
    backgroundColor: "#FFD814",
    borderColor: "#FFD814",
    padding: "0.8rem 3rem",
    borderRadius: "2rem",
    fontSize: "1.2rem",
    marginRight: "1rem",
  }

  return (
    <div style={{ margin: "2rem 0" }}>
      {updatedStock > 0 && (
        <React.Fragment>
          <div style={{ color: "#007600" }}>In Stock</div>
          <div style={{ color: "#565959", fontSize: "1rem" }}>
            Hurry.. Only {updatedStock} Left
          </div>
        </React.Fragment>
      )}
      <div
        style={{
          fontSize: "1.5rem",
          margin: "1rem 0",
        }}
      >
        Quantity:{" "}
        <select
          style={{
            fontSize: "1.3rem",
            padding: "0 0.5rem",
          }}
          value={quantity}
          onChange={(e) => quantityHandler(e)}
        >
          {quantityOptions()}
        </select>
      </div>
      <button
        style={{
          ...buttonStyles
        }}
        onClick={() => {
          utils.cartHandler(id, title, image, price, quantity);
        }}
      >
        Add To Cart
      </button>
      <button
        onClick={() => {
          utils.buyHandler(id, title, image, price, quantity);
        }}
        style={{
          ...buttonStyles,
          margin: "0 1rem 5rem",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
