import axios from "axios";
import React, { Component } from "react";
import style from "../../assets/css/TheaterDetail/TheaterDetail.module.scss";
import DetailEle from "../../components/common/DetailEle";
import Loadding from "../../components/common/Loadding";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dedatil: [],
      detailRelevant: [],
    };
  }
  render() {
    return this.state.detailRelevant.length > 0 ? (
      <div>
        <div className={style["head"]}>
          <div className={style["head-title"]}>
            <p>
              <img
                src={require("../../assets/img/detail1.jpg")}
                onClick={() => {
                  this.props.history.go(-1);
                }}
                alt=""
              />
            </p>
          </div>
          <div className={style["head-detaile"]}>
            <div className={style["detaile-content"]}>
              <div className={style["detaile-information"]}>
                <div className={style["information-img"]}>
                  <img src={this.state.dedatil.theatre_pic} alt="" />
                </div>
                <div className={style["information-location"]}>
                  <p>南山文体中心</p>
                  <span>{this.state.dedatil.sch_num} 场在售演出</span>
                </div>
              </div>
              <div className={style["detaile-location"]}>
                {this.state.dedatil.city_name} |{" "}
                {this.state.dedatil.theatre_address}
              </div>
            </div>
          </div>
          <div className={style["detaile-map"]}>
            <p></p>
          </div>
        </div>
        <DetailEle
          detailName={"热门演出"}
          detailRelevant={this.state.detailRelevant}
        ></DetailEle>
      </div>
    ) : (
      <Loadding></Loadding>
    );
  }
  async componentDidMount() {
    const data = await axios.get(
      `theatre/index/getTheatreInfo?theatre_id=${this.props.match.params.id}&longitude=&latitude=&version=6.1.1&referer=2`
    );
    const { list } = await axios.get(
      `Show/Search/getShowList?page=1&venue_id=${this.props.match.params.vid}&version=6.1.1&referer=2`
    );
    this.setState({
      dedatil: data,
      detailRelevant: list,
    });
    // console.log(data, list);
  }
}
