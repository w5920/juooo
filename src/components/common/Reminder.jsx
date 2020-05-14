import React, { Component } from "react";
import reminder from "../../assets/css/component/reminder.module.css";
export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.tip = null;
  }
  //传3个参数   1.遮罩层是否显示show   2.提示信息bottom的值  3.接受函数 改变传子的值
  //遮罩层显示 提示信息显示太快  没有动画效果 加一个延时器

  render() {
    const timer = setTimeout(() => {
      if (this.tip) {
        this.tip.style.bottom = this.props.bottom;
      }
      clearTimeout(timer);
    }, 10);
    return (
      <React.Fragment>
        <div
          className={reminder["reminder-dialog"]}
          style={{ display: this.props.show }}
        >
          <div className={reminder["tips"]} ref={(el) => (this.tip = el)}>
            <div className={reminder["tips-explain"]}>
              <h3 className={reminder["explain-title"]}>温馨提醒</h3>
              <span
                className={reminder["explain-x"]}
                onClick={() => {
                  // console.log(111);
                  this.props.actionFn();
                }}
              ></span>
              <div className={reminder["explain-rule"]}>
                <p className={reminder["explain"]}>
                  <span className={reminder["explain-spot"]}></span>
                  <span className={reminder["explain-delivery"]}>配送说明</span>
                </p>
                <p className={reminder["specific-description"]}>
                  本演出不支持修改配送方式及配送信息服务，请务必于下单前检查并确认好收货信息。为避免快递不能及时送达，距本演出开场时间少于3天，不提供快递配送服务，您可以选择电子票或者演出现场取票（电子票不提供纸质票品，电子票与现场取票均不支持变更收货人信息）
                </p>
              </div>
              <div className={reminder["explain-rule"]}>
                <p className={reminder["explain"]}>
                  <span className={reminder["explain-spot"]}></span>
                  <span className={reminder["explain-delivery"]}>订票说明</span>
                </p>
                <p className={reminder["specific-description"]}>
                  网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票
                </p>
              </div>
              <div className={reminder["explain-rule"]}>
                <p className={reminder["explain"]}>
                  <span className={reminder["explain-spot"]}></span>
                  <span className={reminder["explain-delivery"]}>确认订单</span>
                </p>
                <p className={reminder["specific-description"]}>
                  下单成功后，您可以通过微信公号【聚橙票务】-【个人中心】-【我的订单】查看订单详情。如有任何疑问，请致电客服热线：400-185-8666咨询
                </p>
              </div>
              <div className={reminder["explain-rule"]}>
                <p className={reminder["explain"]}>
                  <span className={reminder["explain-spot"]}></span>
                  <span className={reminder["explain-delivery"]}>购票提醒</span>
                </p>
                <p className={reminder["specific-description"]}>
                  因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    // console.log(this.props);
  }
}
