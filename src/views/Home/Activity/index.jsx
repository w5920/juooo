import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "../../../assets/css/active/active.module.scss";
import MyRouter from "../../../components/common/MyRouter";
export default class index extends Component {
  render() {
    return (
      <div>
        <MyRouter router={this.props.children}></MyRouter>
        <nav className={style["active-nav"]}>
          <NavLink
            exact
            className={"App-link"}
            activeClassName={"App-active"}
            to={"/activity"}
          >
            拼团
          </NavLink>
          <NavLink
            className={"App-link"}
            activeClassName={"App-active"}
            to={"/activity/myGroup"}
          >
            我的拼团
          </NavLink>
        </nav>
      </div>
    );
  }
}
