import axios from "axios";
import React, { Component } from "react";
import style from "../../../assets/css/SelectCity/SelectCity.module.scss";
import Loadding from "../../../components/common/Loadding";
import PageHeaderWhite from "../../../components/common/PageHeaderWhite";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.letter = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "M",
      "N",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "W",
      "X",
      "Y",
      "Z",
    ];
    this.state = {
      hotCity: [],
      SortedCityList: [],
      activeIndex: -1,
      tips: "定位失败,点击重试",
    };
  }
  resetCity(cityId, cityName, abbreviation) {
    this.props.history.push("/");
    localStorage.setItem(
      "CITY_INFO",
      JSON.stringify({
        cityId,
        cityName,
        abbreviation,
      })
    );
  }
  resetTop() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  positionCity() {
    this.setState(
      {
        tips: "定位中...",
      },
      () => {
        const timer = setTimeout(() => {
          this.setState(
            {
              tips: "定位失败,点击重试",
            },
            () => {
              clearTimeout(timer);
            }
          );
        }, 1000);
      }
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.hotCity.length > 0 ? (
          <div className={style["selectCity"]}>
            <PageHeaderWhite
              pageName={"城市选择"}
              rightShow={false}
            ></PageHeaderWhite>
            <div className={style["cityDetail"]}>
              <div className={style["city-position"]}>
                <span>定位城市</span>
                <ul onClick={() => this.positionCity.call(this)}>
                  <li>{this.state.tips}</li>
                </ul>
              </div>
              <div className={style["city-position"]}>
                <span>热门城市</span>
                <ul className={style["city-selectdetaile"]}>
                  <li onClick={() => this.resetCity(0, "全国", "")}>全国</li>
                  {this.state.hotCity.map((v) => (
                    <li
                      key={v.id}
                      onClick={() =>
                        this.resetCity(v.id, v.name, v.Abbreviation)
                      }
                    >
                      {v.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style["city-letterSelect"]}>
                {this.state.SortedCityList.map((v) => {
                  return (
                    <div
                      className={style["letter-common"]}
                      key={this.$randomKey()}
                      id={v.id}
                    >
                      <span>{v.id}</span>
                      <ul>
                        {v.list.map((item) => (
                          <li
                            key={item.id}
                            onClick={() =>
                              this.resetCity(
                                item.id,
                                item.name,
                                item.Abbreviation
                              )
                            }
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={style["alphabet"]}>
              <span
                className={
                  this.state.activeIndex / 1 === 0 ? style["active"] : ""
                }
                onClick={() => {
                  this.resetTop();
                  this.setState({
                    activeIndex: 0,
                  });
                }}
              >
                热门
              </span>
              <span
                className={
                  this.state.activeIndex / 1 === 1 ? style["active"] : ""
                }
                onClick={() => {
                  this.resetTop();
                  this.setState({
                    activeIndex: 1,
                  });
                }}
              >
                定位
              </span>
              {this.letter.map((v, i) => (
                <a href={`#${v}`} key={this.$randomKey()}>
                  <span
                    className={
                      this.state.activeIndex / 1 === i + 2
                        ? style["active"]
                        : ""
                    }
                    onClick={() => {
                      this.setState({
                        activeIndex: i + 2,
                      });
                    }}
                  >
                    {v}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <Loadding></Loadding>
        )}
      </React.Fragment>
    );
  }
  async componentDidMount() {
    const { hot_city_List } = await axios.get(
      "city/city/getHotCityList?version=6.1.1&referer=2"
    );
    const data = await axios.get(
      "city/city/getSortedCityList?version=6.1.1&referer=2"
    );
    const arr = [];
    for (let i = 0; i < this.letter.length - 1; i++) {
      arr.push(data[this.letter[i]]);
    }
    // console.log(hot_city_List, arr);
    this.setState({
      hotCity: hot_city_List,
      SortedCityList: arr,
    });
  }
}
