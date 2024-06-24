import React from "react";
import styles from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={styles.galleryItem} onClick={onClick}>
      <img src={src} alt={alt} className={styles.galleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
