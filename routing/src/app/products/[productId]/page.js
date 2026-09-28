import React from "react";
export async function generateMetadata({params}){
  const {productId}= await params;

  return {
    title: `Product ${productId}`,
  }
}

async function ProductDetails({ params }) {
  const { productId } = await params;
  return <div>Details of Product : {productId}</div>;
}

export default ProductDetails;
