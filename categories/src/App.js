import React, { useEffect, useState } from "react";
import { getCategoryProducts } from './apis/Categories.js'

const App = ({ routeParams }) => {
  const { category } = routeParams;
  const [prodImgs, setProdImgs] = useState([])
  useEffect(() => {
    getCategoryProducts(category)
      .then(res => res.products)
      // .then(console.log)
      .then(res => {
        console.log(res)
        res= res.map(el=>el.images[0])
        console.log(res)
        setProdImgs(res)
      })

    console.log(prods)
    // products = products.map((el) => el.images[0])
    // console.log(products)
  }, [])
  let prods = prodImgs?.map(el=><img src={el}/>)
  return (
    <div>
      <h1>
        Categorie - {category.replace('-',' ')}
      </h1>
      {prods}
    </div>
  );
};

export default App;
