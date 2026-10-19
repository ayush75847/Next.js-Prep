import React from "react";

function ComplexDashLayout({ children, analytics, notifications, revenue }) {
  return (
    <div>
      <h1 className="text-black-800 text-3xl text-center m-3">{children}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Left side */}
        <div>
          {analytics}
          {revenue}
        </div>

        {/* Right side */}
        <div>{notifications}</div>
      </div>
    </div>
  );
}

export default ComplexDashLayout;
