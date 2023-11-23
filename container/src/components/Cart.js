import React, { useState, useEffect, useRef } from "react";
import { checkLoggedInState } from "../utils.js";
import Delete from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const user = localStorage.user && JSON.parse(localStorage.user);
  const carts = localStorage && localStorage.getItem("carts");

  const stateRef = useRef();
  stateRef.current = totalItems;

  const deleteHandler = (e, id) => {
    e.preventDefault();
    let userItems = JSON.parse(carts)[user];
    let items = userItems;
    let index;
    items = items.filter((el, i) => {
      if (el.id === id) {
        index = i;
        return true;
      }
    })[0];
    if (items.quantity == 1) {
      userItems.splice(index, 1);
    } else {
      userItems[index].quantity = userItems[index].quantity - 1;
    }
    let newCart = { ...JSON.parse(carts) };
    newCart[user] = userItems;
    localStorage.setItem("carts", JSON.stringify(newCart));
    let totalItms = stateRef.current;
    setTotalItems(totalItms - 1);
  };

  const addHandler = (e, id) => {
    e.preventDefault();
    let userItems = JSON.parse(carts)[user];
    let items = userItems;
    let index;
    for (let i = 0; i < items.length; i++) {
      if (id === items[i].id) {
        index = i;
        break;
      }
    }
    userItems[index].quantity = userItems[index].quantity + 1;
    let newCart = { ...JSON.parse(carts) };
    newCart[user] = userItems;
    localStorage.setItem("carts", JSON.stringify(newCart));
    let totalItms = stateRef.current;
    setTotalItems(totalItms + 1);
  };

  useEffect(() => {
    let items = carts;
    if (user && items) {
      items = JSON.parse(items);
      items = items[user];
      let orderTotal = 0,
        qtyTotal = 0;
      items &&
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
                    width: "35rem",
                  }}
                >
                  <div>
                    <img
                      src={image}
                      style={{
                        height: "10rem",
                        width: "10rem",
                        margin: "0 1rem 1rem 0",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h5>{title}</h5>
                    <div style={{ display: "flex", flexDirection: "row", margin: "1rem 0" }}>
                    <div style={{ minWidth: '10rem', fontSize: '1.75rem', fontWeight: '700'}}>{`Rs. ${price}`}</div>
                      {quantity === 1 ? (
                        <Tooltip title="Remove">
                          <Delete
                            style={{
                              margin: "0.25rem 1rem 0rem 2rem",
                              fontSize: "1.5rem",
                              color: "black",
                            }}
                            onClick={(e) => deleteHandler(e, id)}
                          />
                        </Tooltip>
                      ) : (
                        <Tooltip title="Reduce">
                          <Remove
                            style={{
                              margin: "0.25rem 1rem 0rem 2rem",
                              fontSize: "1.5rem",
                              color: "black",
                            }}
                            onClick={(e) => deleteHandler(e, id)}
                          />
                        </Tooltip>
                      )}
                      {quantity}
                      <Tooltip title="Add More">
                        <AddIcon
                          style={{
                            margin: "0.25rem 0 1rem 1rem",
                            fontSize: "1.5rem",
                            color: "black",
                          }}
                          onClick={(e) => addHandler(e, id)}
                        />
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </a>
            );
          })
        );
      setTotalPrice(orderTotal);
      setTotalItems(qtyTotal);
    }
  }, [totalItems]);

  function buyHandler() {
    if (localStorage) {
      delete carts[user];
      localStorage.carts = JSON.stringify(carts);
    }
    alert("Congratulations! Order Placed..");
    location.reload();
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
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
                buyHandler();
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
            {!checkLoggedInState() && (
              <>
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
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// let carts = {
//   1234567890: [
//     {
//       id: 1,
//       title: "iPhone 9",
//       image: "https://i.dummyjson.com/data/products/1/1.jpg",
//       price: "5490",
//       quantity: "2",
//     },
//     {
//       id: 2,
//       title: "iPhone X",
//       image: "https://i.dummyjson.com/data/products/2/1.jpg",
//       price: "8990",
//       quantity: "2",
//     },
//   ],
// };
