import { Component } from "react";
import styles from "./ImageGalleryItem.module.scss";

export default class ImageGalleryItem extends Component {
  render() {
    const { src, alt, onClick } = this.props;
    return (
      <li className={styles.galleryItem} onClick={onClick}>
        <img src={src} alt={alt} className={styles.galleryItemImage} />
      </li>
    );
  }
}
