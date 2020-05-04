import axios from "axios";
import React, { Component } from "react";
import style from "../../../assets/css/Ttouring/Ttouring.module.scss";
import PageHeaderWhite from "../../../components/common/PageHeaderWhite";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touringTime: [],
      touringDetail: [],
    };
  }
  render() {
    return (
      <div>
        <PageHeaderWhite pageName={"巡回演出"}></PageHeaderWhite>
        <div className={style["touring"]}>
          <div className={style["touring-list"]}>
            <div className={style["touring-img"]}>
              <img src={this.state.touringDetail.mobile_col_img} alt="" />
            </div>
            <div>
              <div className={style["touring-theme"]}>
                {this.state.touringDetail.name}
              </div>
              <div className={style["touring-time"]}>
                {this.state.touringTime.map((v, i) => (
                  <div className={style["touring-item"]} key={v.id}>
                    <div className={style["touring-location"]}>
                      {v.name}
                      <p
                        className={style["touring-progress"]}
                        style={{
                          display:
                            i === this.state.touringTime.length - 1
                              ? "none"
                              : "block",
                        }}
                      ></p>
                    </div>
                    <p className={style["touring-top"]}></p>
                    <div className={style["touring-location"]}>
                      {this.$getNowTime(v.start_time, v.end_time)
                        .split("")
                        .slice(0, 5)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={style["touring-tips"]}></div>
      </div>
    );
  }
  async componentDidMount() {
    const data = await axios.get(
      "show/tour/getList?page=1&version=6.1.1&referer=2"
    );
    this.setState({
      touringTime: data.list[0].citys,
      touringDetail: data.list[0],
    });
    console.log(data.list[0].citys, data.list[0]);
    // console.log(this.props.match.params.touring_id);
  }
}
