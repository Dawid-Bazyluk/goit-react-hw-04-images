import { Component } from "react";
import styles from "./Searchbar.module.scss";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (evt) => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query)
      this.setState({quey:""});
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
                    placeholder="Search images and photos"
                    value={this.state.query}
                    onChange = {this.handleChange}
          />
        </form>
      </header>
    );
  }
}
