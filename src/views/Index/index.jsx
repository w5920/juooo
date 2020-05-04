import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "../../assets/css/index/index.module.css";
import MyRouter from "../../components/common/MyRouter";
class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MyRouter router={this.props.children}></MyRouter>
        <div className={style.foot}>
          <nav className={style.navfoot}>
            <div className={style.footCommon}>
              <img src={require("../../assets/img/home.png")} alt="" />
              <NavLink to={"/"}>首页</NavLink>
            </div>
            <div className={style.footCommon}>
              <img src={require("../../assets/img/eticket.png")} alt="" />
              <NavLink to={"/TheatreList"}>剧院</NavLink>
            </div>
            <div className={style.footCommon}>
              <img src={require("../../assets/img/eticket.png")} alt="" />
              <NavLink to={"/Eticket"}>票夹</NavLink>
            </div>
            <div className={style.footCommon}>
              <img src={require("../../assets/img/my.png")} alt="" />
              <NavLink to={"/Myjuooo"}>我的</NavLink>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props);
  }
}

export default index;
