import React, { Component } from "react";
import style from "../../assets/css/component/loadding.module.css";
export default class Loadding extends Component {
  render() {
    return (
      <div className={style["shadom-bg"]}>
        <div className={style["boss"]}>
          <div className={style["people"]}></div>
        </div>
      </div>
    );
  }
}
