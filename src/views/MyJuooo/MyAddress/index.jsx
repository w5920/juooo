import { List, Picker, Switch } from "antd-mobile";
import arrayTreeFilter from "array-tree-filter";
import axios from "axios";
import React, { Component } from "react";
import cityJson from "../../../assets/address.json";
import myAddressCss from "../../../assets/css/myjuooo/myAddress.module.css";
import ButtonFoot from "../../../components/common/ButtonFoot";
import EmptyList from "../../../components/common/EmptyList";
import PageHeaderHref from "../../../components/common/PageHeaderHref";

const allAddressList = cityJson.children;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogShow: false,
      addFromShow: false,
      addressList: [],
      consignee_name: "",
      consignee_number: "",
      street: "",
      data: [],
      cols: 1,
      pickerValue: [],
      asyncValue: [],
      visible: false,
      is_default: true,
    };
  }
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return "";
    }
    const treeChildren = arrayTreeFilter(
      allAddressList,
      (c, level) => c.value === value[level]
    );
    return treeChildren.map((v) => v.label).join("/");
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  changeaddFromShow() {
    this.setState({
      addFromShow: !this.state.addFromShow,
    });
  }
  componentDidMount() {
    this.getShippingAddress();
  }
  //添加收货地址
  async addShippingAddress() {
    let disdtict = this.getSel();
    const { consignee_name, consignee_number, street, is_default } = this.state;
    console.log(consignee_name, consignee_number, disdtict, street);
    const data = await axios.post("/userLogin/shippingAddress", {
      phoneNumber: localStorage.phoneNumber,
      consignee_name,
      consignee_number,
      disdtict,
      street,
      is_default,
    });
    if (data.ok === 1) {
      this.setState({
        addFromShow: !this.state.addFromShow,
      });
      this.getShippingAddress();
    }
  }
  //获取收货地址
  async getShippingAddress() {
    const data = await axios.post("/userLogin/shippingAddressList", {
      phoneNumber: localStorage.phoneNumber,
    });
    if (data.ok === 1) {
      const shippingAddressList = data.shippingAddressList;
      //遍历数组,如果设置了默认值调整到第一位
      const index = shippingAddressList.findIndex((v) => {
        v.is_default = true;
      });
      if (index > 0) {
        const item = shippingAddressList[index];
        shippingAddressList.splice(index, 1);
        shippingAddressList.unshift(item);
      }
      this.setState({
        addressList: shippingAddressList,
      });
    }
  }
  render() {
    // console.log(this.state.addressList.length === 0);
    return (
      <div>
        <PageHeaderHref pageName={"收货地址"}></PageHeaderHref>
        {this.state.addressList.length === 0 ? (
          <EmptyList
            emptyMsg={{ img: "address_empty", msg: "暂无收货地址" }}
          ></EmptyList>
        ) : (
          <div className={myAddressCss.addressContainer}>
            {this.state.addressList.map((v) => (
              <div key={v._id} className={myAddressCss.addressItem}>
                <div className={myAddressCss.addressInfo}>
                  <p>
                    {v.consignee_name} <span>{v.consignee_number}</span>{" "}
                    {v.is_default ? <b>默认</b> : ""}{" "}
                  </p>
                  <h5>
                    <span>{v.disdtict}</span>
                    {v.street}
                  </h5>
                </div>
                <input
                  type="button"
                  className={myAddressCss.editBtn}
                  value="编辑"
                />
              </div>
            ))}
          </div>
        )}
        {this.state.addFromShow ? (
          <div className={myAddressCss.myAddressInfo}>
            <p className={myAddressCss.infoItem}>
              <span>收货人:</span>
              <input
                name="consignee_name"
                placeholder="请输入收货人姓名"
                value={this.state.consignee_name}
                onChange={this.handleChange.bind(this)}
                type="text"
              />
            </p>
            <p className={myAddressCss.infoItem}>
              <span>手机号:</span>
              <input
                name="consignee_number"
                placeholder="请输入收货人手机号"
                value={this.state.consignee_number}
                onChange={this.handleChange.bind(this)}
                type="text"
              />
            </p>
            <Picker
              visible={this.state.visible}
              data={allAddressList}
              value={this.state.pickerValue}
              onChange={(v) => this.setState({ pickerValue: v })}
              onOk={() => this.setState({ visible: false })}
              onDismiss={() => this.setState({ visible: false })}
            >
              <List.Item
                extra={this.getSel()}
                onClick={() => this.setState({ visible: true })}
              >
                <p
                  style={{
                    width: "92px",
                    height: "60px",
                    lineHeight: "60px",
                    fontSize: "16px",
                  }}
                >
                  所在地区：
                </p>
              </List.Item>
            </Picker>
            <p
              className={myAddressCss.infoItem}
              style={{ borderTop: "1px solid #c5c5c5" }}
            >
              <span>详细地址:</span>
              <input
                name="street"
                placeholder="请输入详细地址"
                value={this.state.street}
                onChange={this.handleChange.bind(this)}
                type="text"
              />
            </p>

            <List.Item
              extra={
                <Switch
                  checked={this.state.is_default}
                  onChange={() => {
                    this.setState({
                      is_default: !this.state.is_default,
                    });
                  }}
                />
              }
            >
              <p>设为默认地址</p>
            </List.Item>
          </div>
        ) : (
          ""
        )}
        <ButtonFoot
          style={{ width: "290px" }}
          buttonValue={this.state.addFromShow ? "保存" : "+添加收货地址"}
          buttonFootFn={
            this.state.addFromShow
              ? this.addShippingAddress.bind(this)
              : this.changeaddFromShow.bind(this)
          }
        ></ButtonFoot>
      </div>
    );
  }
}

export default index;
