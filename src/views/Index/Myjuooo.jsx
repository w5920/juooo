import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import myjuoooCss from "../../assets/css/myjuooo/myjuooo.module.css";
import myjuoooIndexAction from "../../store/actionCreator/myJuooo/myIndex";
class Myjuooo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getBasicInfo();
    this.props.getMenuItemList();
  }
  render() {
    if (!this.props.menuItemList) {
      return <p>加载中。。。</p>;
    }
  }
  render() {
    const { is_login, basic_info } = this.props;
    return (
      <div>
        <div className={myjuoooCss.myjuooo}>
          <div className={myjuoooCss.myjuoooTop}>
            <a href="/Myjuooo/Mysecurity">
              <span className={myjuoooCss.settingEnter}>设置</span>
            </a>
            <div className={myjuoooCss.topMain}>
              <div className={myjuoooCss.mineInfo}>
                <div className={myjuoooCss.mineInfo_pic}>userPic</div>
                <div className={myjuoooCss.mineInfo_msg}>
                  <p
                    className={
                      is_login
                        ? myjuoooCss.mineInfo_userNameOne
                        : myjuoooCss.mineInfo_userNameZero
                    }
                  >
                    {is_login ? basic_info.nick_name : "登录/注册"}
                  </p>
                  <p
                    className={
                      is_login
                        ? myjuoooCss.mineInfo_userIdOne
                        : myjuoooCss.mineInfo_userIdZero
                    }
                  >
                    {is_login ? basic_info.uid : "点击登录>"}
                  </p>
                </div>
              </div>
              <div className={myjuoooCss.mineInfo_labal}>
                <a href="">
                  <p className={myjuoooCss.mineInfo_labalName}>开通会员</p>
                </a>
              </div>
              <div className={myjuoooCss.mineInfo_conts}>
                <div className={myjuoooCss.mineInfo_cont}>
                  <a href="/Myjuooo/MyBalance">
                    <p className={is_login ? myjuoooCss.mineInfo_contNumOne : myjuoooCss.mineInfo_contNumZero}>0</p>
                    <p className={myjuoooCss.mineInfo_contName}>账户余额</p>
                  </a>
                </div>
                <div className={myjuoooCss.mineInfo_cont}>
                  <a href="/Points">
                    <p className={is_login ? myjuoooCss.mineInfo_contNumOne : myjuoooCss.mineInfo_contNumZero}>0</p>
                    <p className={myjuoooCss.mineInfo_contName}>积分</p>
                  </a>
                </div>
                <div className={myjuoooCss.mineInfo_cont}>
                  <a href="/Myjuooo/Coupon">
                    <p className={is_login ? myjuoooCss.mineInfo_contNumOne : myjuoooCss.mineInfo_contNumZero}>0</p>
                    <p className={myjuoooCss.mineInfo_contName}>优惠券</p>
                  </a>
                </div>
                <div className={myjuoooCss.mineInfo_contLast}>
                  <a href="/BuyPlus">
                    <p className={myjuoooCss.mineInfo_contNumZero}>立即开通</p>
                    <p className={myjuoooCss.mineInfo_contName}>橙PLUS卡</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={myjuoooCss.myjuoooVipBanner}>
            <a href="">
              <img
                className={myjuoooCss.addVipImg}
                src={require("../../assets/img/adVip.png")}
                alt=""
              />
            </a>
          </div>
          <div className={myjuoooCss.myjuoooLink}>
            <ul className={myjuoooCss.myjuoooLink_conts}>
              <li className={myjuoooCss.myjuoooLink_cont}>
                <a href="/MyOrderList">
                  <p>图标</p>
                  <p>我的订单</p>
                </a>
              </li>
              <li className={myjuoooCss.myjuoooLink_cont}>
                <a href="/Eticket">
                  <p>图标</p>
                  <p>我的票夹</p>
                </a>
              </li>
              <li className={myjuoooCss.myjuoooLink_cont}>
                <a href="/MyWallet">
                  <p>图标</p>
                  <p>我的卡包</p>
                </a>
              </li>
            </ul>
            <ul className={myjuoooCss.myjuoooLink_conts}>
              <li className={myjuoooCss.myjuoooLink_cont}>
                <a href="/Myjuooo/Certification">
                  <p>图标</p>
                  <p>实名购票人</p>
                </a>
              </li>
              <li className={myjuoooCss.myjuoooLink_cont}>
                <a href="/Myjuooo/MyAddress">
                  <p>图标</p>
                  <p>收货地址</p>
                </a>
              </li>
              <li className={myjuoooCss.myjuoooLink_cont}>
                <a href="/Feedback">
                  <p>图标</p>
                  <p>意见反馈</p>
                </a>
              </li>
              <li className={myjuoooCss.myjuoooLink_cont}>
                <p>图标</p>
                <p>客服帮助</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* // 将redux状态映射到属性当中。数据.
// 该函数负责指定当前组件所需要的数据。 */
}
function mapStateToProps(state) {
  return {
    is_login: state.myIndex.is_login,
    basicInfo: state.myIndex.basicInfo,
    // menuItemList: state.myIndex.menuItemList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(myjuoooIndexAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Myjuooo);
