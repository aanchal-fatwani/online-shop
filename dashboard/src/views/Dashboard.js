import React, { useEffect, useState } from "react";
import { getAllCategories, getCategoryProducts } from '../apis/Categories'

export default function Dashboard() {
  const [categoryTiles, setCategoryTiles] = useState([])
  const [phones, setPhones] = useState([])
  const [laptops, setLaptops] = useState([])
  const [searchItem, setSearchItem] = useState('');
  useEffect(() => {
    let categories = getAllCategories();
    categories.then(response => { console.log(response); setCategoryTiles(response) });
    let smartphones = getCategoryProducts('smartphones');
    smartphones.then(response => { console.log(response); setPhones(response.products) });
    let laptopsList = getCategoryProducts('laptops');
    laptopsList.then(response => { console.log(response); setLaptops(response.products) });
  }, [])
  const searchInputHandler = (e) =>{
    console.log(e.target.value)
    setSearchItem(e.target.value)
  }
  return <div>
    <input type="text" value={searchItem} onChange={e=>searchInputHandler(e)} />
    <div>
      {categoryTiles.map(c => <button><a href={`/category/${c}`}>{c}</a></button>)}
    </div>
    <div>
      {phones.map(el => <img src={`${el.images[0]}`} height="200" width="200" />)}
    </div>
    <div>
      {laptops.map(el => <img src={`${el.images[0]}`} height="200" width="200" />)}
    </div>
  </div>
    ;
}
