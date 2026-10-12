import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Products Page",
};

function Products() {
  const productId = 4;
  return (
    <>
      <div>Products List</div>
      <Link href="/products/1" className="nav-link">
        <h1>Product 1</h1>
      </Link>
      <Link href="/products/2" className="nav-link">
        <h1>Product 2</h1>
      </Link>
      <Link href="/products/3" className="nav-link">
        <h1>Product 3</h1>
      </Link>

      <Link href={`/products/${productId}`} className="nav-link">
        <h1>Product {productId}</h1>
      </Link>

      <Link href="/" className="nav-link">
        Home
      </Link>
    </>
  );
}

export default Products;
