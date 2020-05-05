import { ActivityIndicator } from "antd-mobile";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import style from "../../assets/css/component/DetailEle.module.scss";
class DetailEle extends Component {
  //2个参赛 类型名字 detailName   类型相关数据detailRelevant
  render() {
    /* 相关推荐元素 */
    return this.props.detailRelevant.length > 0 ? (
      <div className={style["relevant-recommend"]}>
        <h3>{this.props.detailName}</h3>
        <div className={style["relevant-detail"]}>
          {this.props.detailRelevant.map((v) => (
            <div
              className={style["relevant-detail-ele"]}
              key={v.schedular_id}
              onClick={() => {
                this.props.history.push(
                  "/ShowDetail/" + v.schedular_id + ".html"
                );
              }}
            >
              <div className={style["relevant-detail-item"]}>
                <div className={style["relevant-detail-item-img"]}>
                  <img src={v.pic} alt="" />
                </div>
                <div className={style["relevant-detail-item-introduce"]}>
                  <p className={style["relevant-detail-time"]}>
                    <span>{v.start_show_time}</span>
                    <span>{v.show_time_bottom}</span>
                  </p>
                  <p className={style["relevant-detail-topic"]}>{v.name}</p>
                  <p className={style["relevant-detail-location"]}>
                    {v.city_name} | {v.venue_name}
                  </p>
                  <p className={style["relevant-detail-severve"]}>
                    {v.support_desc.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </p>
                  <p className={style["relevant-detail-price"]}>
                    <strong>￥{v.min_price}</strong>
                    <span>起</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <ActivityIndicator size="large" />
    );
  }
}
export default withRouter(DetailEle);
