import { Component } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import style from "./Loader.module.scss"

export default class Loader extends Component {
  render() {
    return (
      <div className={style.loaderContainer}>
        <MagnifyingGlass
          visible={true}
          height="150"
          width="150"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  }
}
