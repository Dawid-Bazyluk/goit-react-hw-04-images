import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <MagnifyingGlass
        visible={visible}
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

export default Loader;
