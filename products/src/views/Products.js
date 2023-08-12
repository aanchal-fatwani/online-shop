import React, { useEffect, useState } from "react";
import { getProductDetails } from "../apis/Products.js";
import ImageViewer from "./ImageViewer";

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
    <div>
      Products {`${productId}`}
      <ImageViewer images={productDetails.images} />
    </div>
  );
}
