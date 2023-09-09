import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { getAllCategories } from "./apis/Categories";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const App = ({ navigate }) => {
  let customNavigate = navigate;
  if (!navigate) {
    customNavigate = useNavigate();
  }

  const [categoryTabs, setCategoryTabs] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [open, setOpen] = React.useState(false);

  const searchInputHandler = (e) => {
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };

  const unslugify = (slug) =>
    slug
      .replace(/\-/g, " ")
      .replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      );

  const searchHandler = () => {
    let r = allCategories.filter((el) => {
      let t =
        unslugify(el)
          .toLowerCase()
          .replace(" ", "")
          .indexOf(searchItem.replace(" ", "")) > -1;

      return t;
    });
    if (r.length == 0) {
      setOpen(true);
    } else {
      window.location.href = "/category/" + r[0];
    }
  };

  useEffect(() => {
    let categories = getAllCategories();
    categories.then((response) => {
      let res = response;
      setAllCategories(res);
      res = res.slice(0, 9);
      res.unshift("All");
      res = res.map((el) => (
        <div>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`/category/${el.toLowerCase()}`}
          >
            {unslugify(el)}
          </a>
        </div>
      ));
      setCategoryTabs(res);
    });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Oops! No item found..
        </Alert>
      </Snackbar>

      <div
        className="header"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <h1
          className="main-heading"
          onClick={() => customNavigate("/")}
          style={{ margin: "0 20rem 0 5rem", cursor: "pointer" }}
        >
          eDUKAAN
        </h1>
        <TextField
          placeholder="Search for your favorite products"
          id="outlined-start-adornment"
          sx={{
            m: 1,
            width: "35rem",
            backgroundColor: "white",
            borderRadius: "0.5rem",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#232f3e" }} />
              </InputAdornment>
            ),
            style: {
              height: "2.5rem",
              fontSize: "1.25rem",
            },
          }}
          onChange={(e) => searchInputHandler(e)}
          onKeyDown={(ev) => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === "Enter") {
              ev.preventDefault();
              searchHandler();
            }
          }}
        />

        <div style={{ right: "7px" }} className="header-section">
          {
            <>
              <button
                className="header-tab"
                onClick={() => customNavigate("/help")}
              >
                Help
              </button>
              <button
                className="header-tab"
                onClick={() => customNavigate("/contact-us")}
              >
                Contact Us
              </button>
            </>
          }
          <a href={`/cart`}>
            <ShoppingCartIcon
              style={{ margin: "1rem 2rem", fontSize: "2rem", color: "black" }}
            />
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#232f3e",
          color: "white",
          padding: "0.8rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {categoryTabs}
      </div>
    </div>
  );
};

export default App;
