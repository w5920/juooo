import React, { Component } from "react";
import Reminder from "../../components/common/Reminder";
class TheatreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      bottom: 0,
    };
  }
  actionFn() {
    console.log(12222);
    this.setState({
      show: "none",
      bottom: "-12.24rem",
    });
  }
  render() {
    return (
      <div>
        <Reminder
          {...this.state}
          actionFn={this.actionFn.bind(this)}
        ></Reminder>
        <button
          onClick={() => {
            // console.log(this);
            this.setState({
              show: "block",
              bottom: 0,
            });
          }}
        >
          点击
        </button>
      </div>
    );
  }
}

export default TheatreList;
