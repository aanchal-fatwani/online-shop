import React from "react";

export default function Products({ routeParams }) {
  const { productId } = routeParams;
  console.log(productId);
  return <div>
    Products {`${productId}`}
  </div>;
}
