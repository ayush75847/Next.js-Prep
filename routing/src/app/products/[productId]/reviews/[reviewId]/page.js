import React from "react";

async function ReviewDetail({ params }) {
  const { productId, reviewId } = await params;

  return (
    <div>
      <h1> Review Detail of Product {productId} </h1>
      This is about Review {reviewId}
    </div>
  );
}

export default ReviewDetail;
