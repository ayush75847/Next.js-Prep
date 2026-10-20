import React from "react";
import { wonders } from "../wonders";
import Image from "next/image";
import { notFound } from "next/navigation";

async function Photo({ params }) {
  const { id } = await params;

  const image = wonders.find((photo) => photo.id === id);

  if (!image) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "white",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        }}
      >
        <Image
          src={image.src}
          alt={image.name}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            padding: "28px",
          }}
        >
          <h1
            style={{
              margin: "0 0 18px",
              fontSize: "32px",
              color: "#222",
            }}
          >
            {image.name}
          </h1>

          <p
            style={{
              margin: "8px 0",
              fontSize: "17px",
              color: "#555",
            }}
          >
            📷 Photographer: <strong>{image.photographer}</strong>
          </p>

          <p
            style={{
              margin: "8px 0",
              fontSize: "17px",
              color: "#555",
            }}
          >
            📍 Location: <strong>{image.location}</strong>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Photo;
