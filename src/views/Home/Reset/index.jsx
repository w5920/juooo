import React, { Component } from "react";
class idnex extends Component {
  render() {
    return <div></div>;
  }
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.history.push(`/ShowDetail/${this.props.match.params.id}.html`);
  }
}
export default idnex;
