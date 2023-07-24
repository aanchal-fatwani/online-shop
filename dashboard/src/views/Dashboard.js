import React, { useEffect, useState } from "react";
import { getAllCategories } from '../apis/Categories'

export default function Dashboard() {
  const [categoryTiles, setCategoryTiles] = useState([])
  useEffect(() => {
    let categories = getAllCategories();
    categories.then(response => { console.log(response); setCategoryTiles(response) });
  }, [])
  return <h1> {categoryTiles.map(c => <button>{c}</button>)} </h1>;
}
