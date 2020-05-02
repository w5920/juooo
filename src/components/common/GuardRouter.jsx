import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class GuardRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <this.props.component {...this.props} />;
  }
  componentDidMount() {
    //每次进入页面时 回到顶部
    if (this.props.history.action === "PUSH") {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      //   const scrollTop =
      //     document.documentElement.scrollTop || document.body.scrollTop;
      //   console.log(scrollTop);
    } else {
    }
  }
}

export default withRouter(GuardRouter);
