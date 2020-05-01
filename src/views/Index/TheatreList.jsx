import { Button } from "antd-mobile";
import React, { Component } from "react";
class TheatreList extends Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI",
        ],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        剧院列表
        <Button type={"primary"} style={{ width: "100px", margin: " 0 auto " }}>
          primary
        </Button>
        {/* <Button type="warning">warning</Button> */}
        {/* <ActivityIndicator /> */}
        {/* <ActivityIndicator color="white" /> */}
        {/* <ActivityIndicator size="large" /> */}
        {/* <ActivityIndicator text="正在加载" /> */}
        {/* <ActivityIndicator toast /> */}
        {/* <ActivityIndicator size="large" toast text="正在加载" /> */}
      </div>
    );
  }
}

export default TheatreList;
