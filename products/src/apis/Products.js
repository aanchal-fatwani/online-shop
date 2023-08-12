export function getProductDetails(id) {
  return fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
  // .then(console.log);
}
