import React from "react";
import { notFound } from "next/navigation";

async function ReviewDetail({ params }) {
  const { productId, reviewId } = await params;

  if(parseInt(reviewId)>1000) return notFound();

  return (
    <div>
      <h1> Review Detail of Product {productId} </h1>
      This is about Review {reviewId}
    </div>
  );
}

export default ReviewDetail;
