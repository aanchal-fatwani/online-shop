import React, { useEffect, useState } from "react";
import { getProductDetails } from "../apis/Products.js";
import ImageViewer from "./ImageViewer";
import ProductDetails from "./ProductDetails";

export default function Products({ routeParams }) {
  const { productId } = routeParams;
  console.log(productId);
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    getProductDetails(productId).then((res) => {
      console.log(res);
      setProductDetails(res);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <ImageViewer images={productDetails.images?.slice(0,5)} />
      <ProductDetails details={productDetails} />
    </div>
  );
}
