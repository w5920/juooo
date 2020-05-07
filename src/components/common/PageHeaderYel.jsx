import { Icon, NavBar } from "antd-mobile";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import pageHeaderCss from "../../assets/css/component/pageHeader.module.css";

class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar
          className={pageHeaderCss["am"]}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >
          {this.props.pageName}
        </NavBar>
      </>
    );
  }
}

export default withRouter(PageHeader);
