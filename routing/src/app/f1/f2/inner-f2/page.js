import React from "react";
import Link from "next/link";

function InnerF2() {
  return (
    <div className="text-5xl">
      <h1>InnerF2</h1>
      <Link href="/f5" className="text-blue-500">
        F5
      </Link>
    </div>
  );
}

export default InnerF2;
