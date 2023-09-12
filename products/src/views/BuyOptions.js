import React, { useState, useEffect } from "react";

export default function BuyOptions({ id, title, image, price, stock }) {
  const [orgStock, setOrgStock] = useState(stock);
  const [updatedStock, setUpdatedStock] = useState(stock);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setOrgStock(stock > 100 ? parseInt(stock / 10) : stock);
    setUpdatedStock((stock > 100 ? parseInt(stock / 10) : stock) - 1);
  }, [stock]);

  function quantityHandler(e) {
    setQuantity(e.target.value);
    let newValue = orgStock - e.target.value;
    setUpdatedStock(newValue);
  }

  // function buyHandler(id, title, image, price, quantity) {
  function buyHandler() {
    if (localStorage) {
      if(!localStorage.user){
        location.href = '/login'
        return
      }
      let cartItems = [];
      let user = JSON.parse(localStorage.user);
      if (localStorage.carts && localStorage.carts.length) {
        cartItems = JSON.parse(localStorage.carts);
        cartItems = cartItems[user];
      }
      let newCartItems = {
        [user]: [
          ...cartItems,
          {
            id,
            title,
            image,
            price,
            quantity,
          },
        ],
      };
      localStorage.setItem("carts", JSON.stringify(newCartItems));
    }
    window.location.href = "/cart";
  }

  function cartHandler() {
    if (localStorage) {
      if(!localStorage.user){
        location.href = '/login'
        return
      }
      let cartItems = [];
      let user = JSON.parse(localStorage.user);
      if (localStorage.carts && localStorage.carts.length) {
        cartItems = JSON.parse(localStorage.carts);
        cartItems = cartItems[user];
      }
      let newCartItems = {
        [user]: [
          ...cartItems,
          {
            id,
            title,
            image,
            price,
            quantity,
          },
        ],
      };
      localStorage.setItem("carts", JSON.stringify(newCartItems));
      alert("Added!");
    }
  }

  return (
    <div style={{ margin: "2rem 0" }}>
      <div style={{ color: "#007600" }}>In Stock</div>
      <div style={{ color: "#565959", fontSize: "1rem", margin: "0 0" }}>
        Hurry.. Only {updatedStock} Left
      </div>
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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button
        style={{
          backgroundColor: "#FFD814",
          borderColor: "#FFD814",
          padding: "0.8rem 3rem",
          borderRadius: "2rem",
          fontSize: "1.2rem",
          marginRight: "1rem",
        }}
        onClick={() => {
          cartHandler();
        }}
      >
        Add To Cart
      </button>
      <button
        onClick={() => {
          buyHandler(id, title, image, price, quantity);
        }}
        style={{
          backgroundColor: "#FFA41C",
          borderColor: "#FFA41C",
          padding: "0.8rem 3rem",
          borderRadius: "2rem",
          fontSize: "1.2rem",
          marginRight: "1rem",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
