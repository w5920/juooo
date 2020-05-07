import { Icon, NavBar } from "antd-mobile";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import pageHeaderWhiteCss from "../../assets/css/component/pageHeaderWhite.module.css";

class PageHeaderWhite extends Component {
  constructor(props) {
    super(props);
  }
  //this.props 接收三个参数
  //pageName(页面标题) rightShow(布尔值，是否显示右边省略号) rightAction(右侧按钮点击事件函数)
  render() {
    return (
      <div>
        <NavBar
          className={pageHeaderWhiteCss.am}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
          rightContent={[
            this.props.rightShow ? (
              <Icon
                key="1"
                type="ellipsis"
                onClick={() => {
                  this.props.rightAction();
                }}
              />
            ) : (
              ""
            ),
          ]}
        >
          {this.props.pageName}
        </NavBar>
      </div>
    );
  }
}

export default withRouter(PageHeaderWhite);
