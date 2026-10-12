import React from "react";
import Link from "next/link";

function Blog() {
  return (
    <>
      <div>Blog</div>
      <Link href="/" className="nav-link">
        Home
      </Link>

      <Link href="/blog//first">First Blog</Link>
      <Link href="/blog//second">Second Blog</Link>
    </>
  );
}

export default Blog;
