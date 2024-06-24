import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}>
      Load more...
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
