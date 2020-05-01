import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import style from "../../assets/css/home/home.module.css";
class WaterfallEle extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={style["ele-distance"]}
          onClick={() => {
            this.props.history.push(
              "/ShowDetail/" +
                this.props.schedular_id +
                "/" +
                this.props.venue_name +
                ".html"
            );
          }}
        >
          <div className={style["recommend-img"]}>
            <img src={this.props.pic} alt="" />
            <span className={style["recommend-tip"]}>
              {this.props.city_name}
            </span>
          </div>
          <div className={style["recommend-title"]}>
            <div className={style["sponsor"]}>
              <img
                style={{ display: this.props.method_icon ? "block" : "none" }}
                src={this.props.method_icon}
                alt=""
              />
              <p
                style={{ textIndent: this.props.method_icon ? "1rem" : "0" }}
                dangerouslySetInnerHTML={{ __html: this.props.name }}
              ></p>
            </div>
            <p className={style["sponsor-time"]}>{this.props.end_show_time}</p>
            <div className={style["sopnsor-prince"]}>
              <span>￥{this.props.min_price}</span>
              <span>起</span>
            </div>
            <div className={style["sopnsor-service"]}>
              {this.props.support_desc.map((item) => (
                <span key={Math.random() * 100 + 2}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(WaterfallEle);
