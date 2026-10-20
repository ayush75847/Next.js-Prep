"use client"

import React from "react";
import { useRouter } from "next/navigation";

function Modal({ children }) {

    const router= useRouter();
  return (
    <div
      onClick={() => router.back()}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "30px",
          maxWidth: "750px",
          width: "90%",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            position: "absolute",
            top: "12px",
            right: "15px",
            border: "none",
            background: "transparent",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
