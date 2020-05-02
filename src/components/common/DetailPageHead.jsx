import { Modal } from "antd-mobile";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import style from "../../assets/css/component/detailPageHead.module.css";
class DetailPageHead extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style["detail-head"]}>
        <div
          className={style["detail-retrun"]}
          onClick={() => {
            this.props.history.go(-1);
          }}
        >
          <img src={require("../../assets/img/detail1.jpg")} alt="" />
        </div>
        <p>{this.props.detaileHead}</p>
        <div
          className={style["detail-share"]}
          style={{
            display: this.props.shareBtn === true ? "none" : "block",
          }}
        >
          <img
            src={require("../../assets/img/detail2.jpg")}
            alt=""
            onClick={() =>
              Modal.alert("", "使用浏览器的分享功能把演出分享出去", [
                {
                  text: "知道了",
                  onPress: () => console.log("cancel"),
                },
              ])
            }
          />
        </div>
        <div
          className={style["detail-home"]}
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          <img src={require("../../assets/img/detail3.jpg")} alt="" />
        </div>
      </div>
    );
  }
}
export default withRouter(DetailPageHead);
