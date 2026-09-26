import React from "react";

async function Reviews({ params }) {
  const { productId } = await params;
  return (
    <>
      <div>Reviews List of Product: {productId}</div>
      <h1>Review 1</h1>
      <h1>Review 2</h1>
      <h1>Review 3</h1>
    </>
  );
}

export default Reviews;
