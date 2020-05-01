import React, { Component } from "react";

export default class index extends Component {
  render() {
    return <div>这里是巡回演出</div>;
  }
  componentDidMount() {
    console.log(this.props.match);
  }
}
