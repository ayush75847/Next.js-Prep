import React from "react";

async function Docs({ params }) {
  const { slug } = await params;

  if (!slug) return <h1> Docs Page</h1>;

  if (slug?.length === 1) {
    return <h1>Your are viewing docs for {slug[0]}</h1>;
  } else if (slug?.length === 2) {
    return (
      <h1>
        You are viewing docs for {slug[1]} inside {slug[0]}
      </h1>
    );
  }

  return <h1> Docs Page</h1>;
}

export default Docs;
