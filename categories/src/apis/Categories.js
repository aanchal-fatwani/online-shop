export function getCategoryProducts(category) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        // .then(console.log);
}
