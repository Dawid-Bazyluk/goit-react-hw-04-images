import { Component } from "react";
import styles from "./Modal.module.scss";

export default class Modal extends Component {
  handleKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      this.props.onClose();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { src, alt, onClose } = this.props;

    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
