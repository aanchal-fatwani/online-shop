export function getAllCategories() {
    return fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
}

export function getCategoryProducts(category) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
}
