import React, { useEffect, useState } from "react";
import { getProductDetails } from "../apis/Products.js";
import ImageViewer from "./ImageViewer";
import ProductDetails from "./ProductDetails";

export default function Products({ routeParams, utils }) {
  const { productId } = routeParams;
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    getProductDetails(productId).then((res) => {
      setProductDetails(res);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <ImageViewer images={productDetails.images?.slice(0,5)} />
      <ProductDetails details={productDetails} utils={utils} />
    </div>
  );
}
