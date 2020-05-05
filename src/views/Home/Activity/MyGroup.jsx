import React, { Component } from "react";
import EmptyList from "../../../components/common/EmptyList";
import PageHeaderHref from "../../../components/common/PageHeaderHref";
export default class MyGroup extends Component {
  render() {
    return (
      <div>
        <PageHeaderHref pageName={"我的拼团"} rightShow={true}></PageHeaderHref>
        <EmptyList
          emptyMsg={{ img: "ticket_empty", msg: "暂无拼团记录" }}
        ></EmptyList>
        {/* <Loadding></Loadding> */}
      </div>
    );
  }
}
