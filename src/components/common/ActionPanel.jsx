import { ActivityIndicator, Toast, WhiteSpace, WingBlank } from "antd-mobile";
import axios from "axios";
import React, { Component, Fragment } from "react";
import style from "../../assets/css/component/actionPanel.module.css";

export default class ActionPanel extends Component {
  constructor(props) {
    super(props);
    this.paymoney = null; //选座购买
    this.state = {
      selectDate: [],
      selectLocation: [],
      selectPrice: [],
      timeIndex: 0, //选择日期切换
      selectIndex: 0, //选择场次切换
      priceIndex: -1, //选择价格切换  >0说明以上全部选中了
    };
  }
  //该组件需要接受3个参数
  //1.该组件的bottom值
  //2.改变父组件传下的值得函数 actionFn
  //3所需要的数据
  render() {
    return (
      <Fragment>
        {this.state.selectPrice.length > 0 ? (
          <div
            className={style["actionPanel"]}
            style={{ bottom: this.props.bottom }}
          >
            <div className={style["action-time"]}>
              <p>选择日期</p>
              <div className={style["action-select"]}>
                {this.state.selectDate.map((v, i) => (
                  <span
                    key={v.id + 124}
                    className={`${
                      this.state.timeIndex === i ? style["active"] : ""
                    }`}
                    onClick={(i) => {
                      this.setState({
                        timeIndex: i,
                      });
                    }}
                  >
                    {v.project_time}
                  </span>
                ))}
              </div>
            </div>
            <div className={style["action-time"]}>
              <p>选择场次</p>
              <div className={style["action-select"]}>
                {this.state.selectLocation.map((v, i) => (
                  <span
                    key={v.id + 11124}
                    className={`${
                      this.state.selectIndex === i ? style["active"] : ""
                    }`}
                    onClick={() => {
                      this.setState({
                        selectIndex: i,
                      });
                    }}
                  >
                    {v.session_time}
                  </span>
                ))}
              </div>
            </div>
            <div className={style["action-time"]}>
              <p>选择价格</p>
              <div className={style["action-select"]}>
                {this.state.selectPrice.map((v, i) => (
                  <span
                    className={`${style["action-price"]} ${
                      this.state.priceIndex === i ? style["active"] : ""
                    }`}
                    key={v.ticket_id}
                    onClick={() => {
                      this.setState(
                        {
                          priceIndex: i,
                        },
                        () => {
                          this.paymoney.style.background =
                            "linear-gradient(50deg, #ff9a34, #ff4d4a)";
                          this.paymoney.style.color = "#Fff";
                        }
                      );
                    }}
                  >
                    {v.price}
                    <span className={style["action-register"]}>缺货登记</span>
                  </span>
                ))}
              </div>
            </div>
            <div
              className={style["action-remove"]}
              onClick={() => {
                this.props.actionFn();
              }}
            >
              X
            </div>

            <div className={style["action-pay"]}>
              <WingBlank>
                <WhiteSpace />
                <p
                  ref={(el) => {
                    this.paymoney = el;
                  }}
                  onClick={() => {
                    if (this.state.priceIndex > -1) {
                      Toast.offline("敬请期待");
                    } else {
                      Toast.fail("Load failed !!!");
                    }
                  }}
                >
                  选座购买
                </p>
              </WingBlank>
            </div>
          </div>
        ) : (
          <ActivityIndicator size="large" text="loading..." />
        )}
      </Fragment>
    );
  }
  uniq(arr) {
    //日期去重
    arr = JSON.parse(JSON.stringify(arr)); //避免影响原数组
    for (let i = 1; i < arr.length; i++) {
      if (i + 1 <= arr.length) {
        if (arr[i].project_time == arr[i - 1].project_time) {
          arr.splice(i, 1);
          i--;
        }
      }
    }
    return arr;
  }
  uniqTime(arr) {
    //场次事件去重
    arr = JSON.parse(JSON.stringify(arr));
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].session_time == arr[i - 1].session_time) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }
  async componentDidMount() {
    const { list } = await axios.get(
      `Schedule/Schedule/getScheduleTicket?schedular_id=${this.props.ActionData[0].id}&version=6.1.1&referer=2`
    );
    //选择日期去重
    const arr = this.uniq(this.props.ActionData); //日期
    const brr = this.uniqTime(this.props.ActionData); //场次
    console.log(list, arr, brr); //价格
    this.setState({
      selectDate: arr,
      selectLocation: brr,
      selectPrice: list,
    });
  }
}
