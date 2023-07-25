export function getAllCategories() {
    return fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
    // .then(console.log);
}

export function getCategoryProducts(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(console.log);
}
