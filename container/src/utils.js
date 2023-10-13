export function addNewUser(name, mobile, email, password) {
  if (localStorage) {
    password = btoa(password);
    let userDetails = {
      name,
      mobile,
      email,
      password,
    };
    let currentUsers = localStorage.getItem("allUsers");
    if (currentUsers) currentUsers = JSON.parse(currentUsers);
    else currentUsers = {};
    currentUsers[mobile] = userDetails;

    localStorage.setItem("allUsers", JSON.stringify(currentUsers));
    alert("User Added!");
    loginUser(mobile, true);
  } else {
    alert("Some issue occurred!");
  }
}

export function loginUser(mobile, newUser = false) {
  if (localStorage) {
    let allUsers;
    if (!newUser) {
      allUsers =
        localStorage["allUsers"] && JSON.parse(localStorage["allUsers"]);
    }
    if (allUsers && !allUsers[mobile]) {
      alert("User does not exist.. Sign-up first or try again!");
    } else {
      localStorage.setItem("user", JSON.stringify(parseInt(mobile)));
      alert("You have successfully logged in!");
      window.location.href = "/";
    }
  } else {
    alert("Some issue occurred!");
  }
}

export function checkLoggedInState() {
  if (localStorage && localStorage.user) return true;
  return false;
}

export function getCartItems(user = "") {
  let items = [];
  if (localStorage) {
    items = localStorage.getItem("carts");
    items = JSON.parse(items);
    items = items[user];
  }
  return items;
}

export function buyHandler(id, title, image, price, quantity) {
  if (localStorage) {
    if (!localStorage.user) {
      location.href = "/login";
      return;
    }
    let cartItems = [];
    let user = JSON.parse(localStorage.user);
    let carts = localStorage.carts && JSON.parse(localStorage.carts);
    if (carts) {
      cartItems = carts[user];
      cartItems = cartItems && cartItems.length ? [...cartItems] : [];
    }
    let qty;
    if (
      cartItems.length !== 0 &&
      cartItems.filter((el) => el.id == id)?.length > 0
    ) {
      qty = cartItems.filter((el) => el.id == id)[0].quantity;
      cartItems = cartItems.filter((el) => el.id != id);
    }
    quantity = parseInt(quantity);
    quantity += (qty ? qty : 0);
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

export function cartHandler(id, title, image, price, quantity) {
  if (localStorage) {
    if (!localStorage.user) {
      location.href = "/login";
      return;
    }
    let cartItems = [];
    let user = JSON.parse(localStorage.user);
    let carts = localStorage.carts && JSON.parse(localStorage.carts);
    if (carts) {
      cartItems = carts[user];
      cartItems = cartItems && cartItems.length ? [...cartItems] : [];
    }
    let qty;
    if (
      cartItems.length !== 0 &&
      cartItems.filter((el) => el.id == id)?.length > 0
    ) {
      qty = cartItems.filter((el) => el.id == id)[0].quantity;
      cartItems = cartItems.filter((el) => el.id != id);
    }
    quantity = parseInt(quantity);
    quantity += (qty ? qty : 0);
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
