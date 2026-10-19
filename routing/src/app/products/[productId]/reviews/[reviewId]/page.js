import React from "react";
import { notFound } from "next/navigation";

async function ReviewDetail({ params }) {
  const { productId, reviewId } = await params;
  // const random = Math.floor(Math.random()*2);
  // if (random < 1) throw new Error("Error occured");

  if (parseInt(reviewId) > 1000) return notFound();

  return (
    <div>
      <h1> Review Detail of Product {productId} </h1>
      <h4>This is about Review {reviewId}</h4>
    </div>
  );
}

export default ReviewDetail;
