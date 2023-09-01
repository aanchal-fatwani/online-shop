import React, { useState, useEffect } from "react";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const user = "1234567890";
  useEffect(() => {
    let items = localStorage && localStorage.getItem("carts");
    if (items) {
      items = JSON.parse(items);
      items = items[user];
      console.log(items);
      let orderTotal = 0,
        qtyTotal = 0;
      setProducts(
        items.map((item) => {
          const { title, price, image, id, quantity } = item;
          orderTotal += price * quantity;
          qtyTotal += parseInt(quantity);
          return (
            <a
              href={`/product/${id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "1rem",
                }}
              >
                <img
                  src={image}
                  style={{
                    height: "8rem",
                    width: "8rem",
                    margin: "0 1rem 1rem 0",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>
                    {title} (x{quantity})
                  </h5>
                  <h3>Rs. {price}</h3>
                  {/* {price * quantity} */}
                </div>
              </div>
            </a>
          );
        })
      );
      setTotalPrice(orderTotal);
      setTotalItems(qtyTotal);
    }
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "4rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {products.length > 0 ? (
          <React.Fragment>
            <div>Subtotal: Rs.{totalPrice}</div>
            <div>Items: {totalItems}</div>
            {products}
            <button
              style={{
                backgroundColor: "#FFA41C",
                borderColor: "#FFA41C",
                padding: "0.8rem 3rem",
                borderRadius: "2rem",
                fontSize: "1.2rem",
                marginRight: "1rem",
              }}
              onClick={() => {
                alert("Congratulations!! Order Placed..");
              }}
            >
              Buy Now
            </button>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>Your Cart is Empty</h2>
            <div
              style={{
                margin: "1rem",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "#007185",
                }}
                href="/"
              >
                Shop top deals
              </a>
            </div>
            <div style={{ margin: "0 -5rem", padding: "3rem 0" }}>
              <a href="/login">
                <button
                  style={{
                    padding: "0.5rem 2rem",
                    borderRadius: "1rem",
                    backgroundColor: "#F2C200",
                    borderColor: "#F2C200",
                    fontSize: "1.5rem",
                    margin: "0 1rem",
                    cursor: "pointer",
                  }}
                >
                  Sign in to your account
                </button>
              </a>
            </div>
            <div>
              <a href="/register">
                <button
                  style={{
                    padding: "0.5rem 2rem",
                    borderRadius: "1rem",
                    backgroundColor: "#F2C200",
                    borderColor: "#F2C200",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

let carts = {
  1234567890: [
    {
      id: 1,
      title: "iPhone 9",
      image: "https://i.dummyjson.com/data/products/1/1.jpg",
      price: "5490",
      quantity: "2",
    },
    {
      id: 2,
      title: "iPhone X",
      image: "https://i.dummyjson.com/data/products/2/1.jpg",
      price: "8990",
      quantity: "2",
    },
  ],
};
