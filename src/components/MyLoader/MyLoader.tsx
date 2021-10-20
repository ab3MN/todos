import React from "react";
import Loader from "react-loader-spinner";
import style from "./MyLoader.module.css";

const MyLoader = () => {
  return (
    <div className={style.fallback}>
      <Loader
        type='Puff'
        color='#00BFFF'
        height={100}
        width={100}
        timeout={2000}
      />
    </div>
  );
};

export default MyLoader;
