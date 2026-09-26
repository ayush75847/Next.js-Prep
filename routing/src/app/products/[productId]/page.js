import React from "react";

async function ProductDetails({ params }) {
  const { productId } = await params;
  return <div>Details of Product : {productId}</div>;
}

export default ProductDetails;
