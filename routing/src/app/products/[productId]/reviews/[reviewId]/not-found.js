"use client";

import React from "react";
import { usePathname } from "next/navigation";

function NotFound() {
  const pathname = usePathname();
  console.log(pathname);

  const segments = pathname.split("/");
  const product = segments[2];
  const review = segments[4];
  return (
    <div>
      <h1>
        Review {review} not found for product {product}
      </h1>
    </div>
  );
}

export default NotFound;
