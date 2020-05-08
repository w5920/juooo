import React, { Component } from "react";
import mySecutityCss from "../../../assets/css/myjuooo/mySecutity.module.css";
import PageHeaderWhite from "../../../components/common/PageHeaderWhite";

class index extends Component {
  componentDidMount() {
    document.body.style.background = "#f5f5f5 !important";
  }

  loginOut() {
    localStorage.clear();
    this.props.history.push('/Myjuooo');
  }
  render() {
    return (
      <div>
        <PageHeaderWhite pageName={"设置"}></PageHeaderWhite>
        <div className={mySecutityCss.userContainer}>
          <a href="/Myjuooo/MyInfo">
            <div className={mySecutityCss.containerInfo}>
              <div className={mySecutityCss.userInfo}>
                <img src={require("../../../assets/img/logo-user.png")} />
                <div>
                  <p>{localStorage.userName || localStorage.phoneNumber}</p>
                  <p>用户ID:{localStorage._id || ""}</p>
                </div>
              </div>
              <img src={require("../../../assets/img/arrow.png")} alt="" />
            </div>
          </a>
          <a href="/Myjuooo/MyAccountSafe">
            <div className={mySecutityCss.containerItem}>
              <div>账号安全</div>
              <img src={require("../../../assets/img/arrow.png")} alt="" />
            </div>
          </a>
        </div>
        <a href="/Myjuooo/UserProtocol">
          <div className={mySecutityCss.containerItem}>
            <div>用户协议</div>
            <img src={require("../../../assets/img/arrow.png")} alt="" />
          </div>
        </a>
        <a href="/Myjuooo/AboutUs">
          <div className={mySecutityCss.containerItem}>
            <div>关于聚橙</div>
            <img src={require("../../../assets/img/arrow.png")} alt="" />
          </div>
        </a>
        <button className={mySecutityCss.loginOut} onClick={this.loginOut.bind(this)}>退出登录</button>
      </div>
    );
  }
}

export default index;
