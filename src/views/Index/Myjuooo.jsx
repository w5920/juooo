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
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    if (!this.props.menuItemList) {
      return <p>加载中。。。</p>;
    }
    return (
      <div className={myjuoooCss.myjuooo}>
        <div className={myjuoooCss.myjuoooTop}>
          <div className={myjuoooCss.topMain}>
            <div className={myjuoooCss.mineInfo}>
              <div className={myjuoooCss.mineInfo_pic}>userPic</div>
              <div className={myjuoooCss.mineInfo_msg}>
                <p className={myjuoooCss.mineInfo_userName}> userName</p>
                <p className={myjuoooCss.mineInfo_userId}>userId</p>
              </div>
            </div>
            <div className={myjuoooCss.mineInfo_labal}>
              <p className={myjuoooCss.mineInfo_labalName}>开通会员</p>
            </div>
            <div className={myjuoooCss.mineInfo_conts}>
              <div className={myjuoooCss.mineInfo_cont}>
                <p className={myjuoooCss.mineInfo_contNum}>0</p>
                <p className={myjuoooCss.mineInfo_contName}>账户余额</p>
              </div>
              <div className={myjuoooCss.mineInfo_cont}>
                <p className={myjuoooCss.mineInfo_contNum}>0</p>
                <p className={myjuoooCss.mineInfo_contName}>积分</p>
              </div>
              <div className={myjuoooCss.mineInfo_cont}>
                <p className={myjuoooCss.mineInfo_contNum}>0</p>
                <p className={myjuoooCss.mineInfo_contName}>优惠券</p>
              </div>
              <div className={myjuoooCss.mineInfo_contLast}>
                <p className={myjuoooCss.mineInfo_contNum}>立即开通</p>
                <p className={myjuoooCss.mineInfo_contName}>橙PLUS卡</p>
              </div>
            </div>
          </div>
        </div>
        <div className={myjuoooCss.myjuoooVipBanner}>
          <a href="">
            <img src="../../assets/img/adVip.png" alt="" />
          </a>
          广告区
        </div>
        <div className={myjuoooCss.myjuoooLink}></div>
      </div>
    );
  }
}

// 将redux状态映射到属性当中。数据.
// 该函数负责指定当前组件所需要的数据。
function mapStateToProps(state) {
  return {
    basicInfo: state.myIndex.basicInfo,
    menuItemList: state.myIndex.menuItemList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(myjuoooIndexAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Myjuooo);
