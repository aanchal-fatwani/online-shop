import React, { useEffect, useState } from "react";
import { getAllCategories, getCategoryProducts } from '../apis/Categories'

export default function Dashboard() {
  const [categoryTiles, setCategoryTiles] = useState([])
  const [phones, setPhones] = useState([])
  useEffect(() => {
    let categories = getAllCategories();
    categories.then(response => { console.log(response); setCategoryTiles(response) });
    let smartphones = getCategoryProducts('smartphones');
    smartphones.then(response => { console.log(response); setPhones(response.products) });
  }, [])
  return <div>
    <div>
      {categoryTiles.map(c => <button>{c}</button>)}
    </div>
    <div>
      {phones.map(el => <button>{el.images[0]}</button>)}
    </div>
  </div>
    ;
}
