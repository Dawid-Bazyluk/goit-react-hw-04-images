import { Component } from "react";
import styles from "./Button.module.scss"

export default class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;
    return (
      <button
        type="button"
        className={styles.button}
        onClick={onClick}
        disabled={disabled}>Load more...</button>
    );
  }
}
