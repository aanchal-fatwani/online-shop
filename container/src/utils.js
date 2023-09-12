export function addNewUser(name, mobile, email, password) {
  if (localStorage) {
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
    alert("User added");
    loginUser(mobile, true);
  } else {
    alert("Some issue occurred!");
  }
}

export function loginUser(mobile, newUser = false) {
  if (localStorage) {
    let allUsers;
    if (!newUser) {
      allUsers = localStorage["allUsers"] && JSON.parse(localStorage["allUsers"]);
    }
    if (allUsers && !allUsers[mobile]) {
      alert("User does not exist.. Sign-up first or try again!");
    } else {
      localStorage.setItem("user", JSON.stringify(mobile));
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
