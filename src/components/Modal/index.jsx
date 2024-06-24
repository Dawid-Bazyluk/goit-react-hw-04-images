import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const Modal = ({ src, alt, onClose }) => {
  const handleKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default Modal;
