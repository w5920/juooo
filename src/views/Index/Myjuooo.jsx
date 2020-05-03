import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import myjuoooCss from "../../assets/css/myjuooo/myjuooo.module.css";
import myjuoooAction from "../../store/actionCreator/myJuooo";
class Myjuooo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.style.backgroundColor = '#f5f5f5';
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
      <div className={myjuoooCss.myjuooo}>
        <div className={myjuoooCss.myjuoooTop}>
          <a href="/Myjuooo/Mysecurity">
            <span className={myjuoooCss.settingEnter}>设置</span>
          </a>
          <div className={myjuoooCss.topMain}>
            <div className={myjuoooCss.mineInfo}>
              <div className={myjuoooCss.mineInfo_pic}>
                <img src={require('../../assets/img/logo-user.png')} />
              </div>
              <div className={myjuoooCss.mineInfo_msg} onClick={is_login ? '' : () => this.props.history.push('/Register')} >
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
              <a href="/Plus">
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
                <a href="/Plus">
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
                <span className={myjuoooCss.myjuoooLink_bgImg}>
                  <img src={require('../../assets/img/myOrder_bg.png')} />
                </span>
                <p>我的订单</p>
              </a>
            </li>
            <li className={myjuoooCss.myjuoooLink_cont}>
              <a href="/Eticket">
                <span className={myjuoooCss.myjuoooLink_bgImg}>
                  <img src={require('../../assets/img/myTicket_bg.png')} />
                </span>
                <p>我的票夹</p>
              </a>
            </li>
            <li className={myjuoooCss.myjuoooLink_cont}>
              <a href="/MyWallet">
                <span className={myjuoooCss.myjuoooLink_bgImg}>
                  <img src={require('../../assets/img/myCard_bg.png')} />
                </span>
                <p>我的卡包</p>
              </a>
            </li>
          </ul>
          <ul className={myjuoooCss.myjuoooLink_conts}>
            <li className={myjuoooCss.myjuoooLink_cont}>
              <a href="/Myjuooo/Certification">
                <span className={myjuoooCss.myjuoooLink_bgImg}>
                  <img src={require('../../assets/img/myPeople_bg.png')} />
                </span>
                <p>实名购票人</p>
              </a>
            </li>
            <li className={myjuoooCss.myjuoooLink_cont}>
              <a href="/Myjuooo/MyAddress">
                <span className={myjuoooCss.myjuoooLink_bgImg}>
                  <img src={require('../../assets/img/myAddress_bg.png')} />
                </span>
                <p>收货地址</p>
              </a>
            </li>
            <li className={myjuoooCss.myjuoooLink_cont}>
              <a href="/Feedback">
                <span className={myjuoooCss.myjuoooLink_bgImg}>
                  <img src={require('../../assets/img/myFeedback_bg.png')} />
                </span>
                <p>意见反馈</p>
              </a>
            </li>
            <li className={myjuoooCss.myjuoooLink_cont}>
              <span className={myjuoooCss.myjuoooLink_bgImg}>
                <img src={require('../../assets/img/myHelp_bg.png')} />
              </span>
              <p>客服帮助</p>
            </li>
          </ul>
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
    is_login: state.myjuooo.is_login,
    basicInfo: state.myjuooo.basicInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(myjuoooAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Myjuooo);
