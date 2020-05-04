import axios from "axios";
import React, { Component } from "react";
import style from "../../../assets/css/TourShowInfo/tourShowInfo.module.scss";
import DetailPageHead from "../../../components/common/DetailPageHead";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourList: [],
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.tourList.length > 0 ? (
          <div className={style["tour-bg"]}>
            <div className={style["head-detail"]}>
              <DetailPageHead
                detaileHead={"演出详情"}
                shareBtn={true}
              ></DetailPageHead>
              {this.state.tourList.map((v) => (
                <div className={style["theme-detail"]} key={v.id}>
                  <div className={style["theme-img"]}>
                    <img src={v.mobile_col_img} alt="" />
                  </div>
                  <div className={style["theme-introduce"]}>
                    <p className={style["theme-title"]}>{v.name}</p>
                    <p className={style["theme-city"]}>
                      {v.city_num}个城市 | {v.sch_num}场演出
                    </p>
                    <span>2020.08.13 - 10.03</span>
                  </div>
                </div>
              ))}
            </div>
            {/*  聚成制作*/}
            <div className={style["tour-data"]}>
              {this.state.list.map((v) => (
                <div className={style["tour-list"]} key={v.show_id}>
                  <div className={style["tour-item"]}>
                    <div className={style["tour-time"]}>
                      <p className={style["tour-data"]}>
                        <strong>
                          {this.$getNowTime(v.start_time, v.end_time)
                            .split("")
                            .slice(0, 3)}
                        </strong>
                        <span>
                          {this.$getNowTime(v.start_time, v.end_time)
                            .split("")
                            .slice(3)}
                        </span>
                      </p>
                    </div>
                    <div
                      className={style["tour-detail"]}
                      onClick={() => {
                        this.props.history.push(`/ShowDetail/${v.sch_id}.html`);
                      }}
                    >
                      <h3>{v.sch_name} </h3>
                      <p className={style["tour-local"]}>
                        {v.city_name} | {v.venue_name}
                      </p>
                      <p className={style["tour-price"]}>
                        <span className={style["tour-min"]}>
                          ¥{v.min_price}
                        </span>
                        <span className={style["tour-span"]}>起</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>数据正在奔跑中</div>
        )}
      </React.Fragment>
    );
  }
  async componentDidMount() {
    // console.log(this.props.match.params.tourId);
    const data = await axios.get(
      `show/tour/getInfo?id=${this.props.match.params.tourId}&version=6.1.1&referer=2`
    );
    if (typeof data === "object") {
      const arr = [];
      arr.push(data);
      this.setState(
        {
          tourList: arr,
          list: arr[0].list.reverse(),
        },
        () => {
          // console.log(this.state.tourList, this.state.list);
        }
      );
    }
  }
}
