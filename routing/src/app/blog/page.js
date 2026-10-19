import React from "react";
import Link from "next/link";

async function Blog() {
  await new Promise((resolve)=>{
    setTimeout(()=> resolve(), 2000) 
  })
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
