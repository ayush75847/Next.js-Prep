import React from "react";
import { wonders } from "./wonders";
import Link from "next/link";
import Image from "next/image";
import styles from "./PhotoFeed.module.css";

function PhotoFeed() {
  return (
    <div className={styles.gallery}>
      {wonders.map((photo) => (
        <Link
          className={styles.photoLink}
          key={photo.id}
          href={`/photo-feed/${photo.id}`}
        >
          <Image className={styles.photo} src={photo.src} alt={photo.name} />
        </Link>
      ))}
    </div>
  );
}

export default PhotoFeed;
