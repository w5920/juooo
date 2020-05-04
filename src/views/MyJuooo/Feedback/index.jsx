import { InputItem, List, Picker, TextareaItem, Toast } from "antd-mobile";
import axios from "axios";
import React, { Component } from "react";
import PageHeaderHref from "../../../components/common/PageHeaderHref";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      phoneNumber: null,
      hasError: false,
    };
  }
  async componentDidMount() {
    document.body.style.backgroundColor = "#f5f5f5";
    const data = await axios.get(
      "/city/city/getCityList?version=6.1.1&referer=2"
    );
    const city_List = data.city_list;
    let cityList = [];
    city_List.map((v) => {
      cityList.push({
        value: v.id,
        label: v.name,
      });
    });
    this.setState({
      cityList,
    });
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("Please enter 11 digits");
    }
  };
  onChange = (phoneNumber) => {
    if (phoneNumber.replace(/\s/g, "").length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      phoneNumber,
    });
  };

  render() {
    if (!this.state.cityList) {
      return;
    }
    return (
      <div>
        <PageHeaderHref pageName={"意见反馈"}></PageHeaderHref>
        <List>
          <TextareaItem
            rows={10}
            count={200}
            placeholder="请填写您的问题或建议,我们将不断改进"
            autoFocus
          />
        </List>
        <div style={{ height: "20px", backgroundColor: "#f5f5f5" }}></div>
        <List>
          <InputItem
            type="phone"
            placeholder="请输入您的手机号,以便于我们联系"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.phoneNumber}
          >
            手机号
          </InputItem>
        </List>
        <div style={{ height: "20px", backgroundColor: "#f5f5f5" }}></div>
        <Picker
          data={this.state.cityList}
          cols={1}
          indicatorStyle={{
            backgroundColor: "#FF6743",
            opacity: "0.6",
          }}
          itemStyle={{
            fontSize: "20px",
          }}
          cascade="false"
          className="forss"
        >
          <List.Item arrow="horizontal">所在城市</List.Item>
        </Picker>
        <button
          style={{
            margin: "25px 15px",
            width: "345px",
            height: "48px",
            backgroundColor: "#FF6743",
            borderRadius: "24px",
            border: "0",
          }}
        >
          提交
        </button>
      </div>
    );
  }
}

export default index;
