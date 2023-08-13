export function getAllCategories() {
  return fetch("https://dummyjson.com/products/categories").then((res) =>
    res.json()
  );
}
