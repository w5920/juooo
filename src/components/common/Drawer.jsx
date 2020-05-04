import React, { Component } from "react";
import style from "../../assets/css/component/drawer.module.css";
export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.open = null;
    this.state = {
      avtiveIndex: 0,
      cityId: 0,
      currentCity: "全国",
      abbreviation: "",
    };
  }

  //1.遮罩层显示mask  抽屉出现动画right   2.关闭组件函数   3数据drawerData
  //由于父级要根据子组件数据获取数据 所以额外添加一个函数4 函数getMapIdToData

  render() {
    const timer = setTimeout(() => {
      this.open.style.right = this.props.right;
      clearTimeout(timer);
    }, 10);
    return (
      <div
        className={style["drawerassembly"]}
        style={{ display: this.props.mask }}
        onClick={(e) => {
          e.stopPropagation();
          this.props.showFn();
        }}
      >
        <div
          ref={(el) => (this.open = el)}
          className={style["map-city"]}
          onClick={(e) => {
            e.stopPropagation();
            console.log(11111111);
          }}
        >
          <h3 className={style["eversing-city"]}>城市</h3>
          <div className={style["city"]}>
            <ul>
              <li
                className={this.state.avtiveIndex === 0 ? style["avtive"] : ""}
                style={{
                  display: this.props.drawerData ? "block" : "none",
                }}
              >
                {this.state.currentCity}
              </li>
              {this.props.drawerData.length > 0 ? (
                this.props.drawerData.map((v, i) => (
                  <li
                    key={v.id}
                    className={
                      this.state.avtiveIndex === i + 1 ? style["avtive"] : ""
                    }
                    onClick={() => {
                      this.setState({
                        avtiveIndex: i + 1,
                        cityId: v.id,
                        currentCity: v.name,
                        abbreviation: v.Abbreviation,
                      });
                    }}
                  >
                    {v.name}
                  </li>
                ))
              ) : (
                <li>数据还在奔跑中</li>
              )}
            </ul>
          </div>
          <div className={style["city-function"]}>
            <span
              onClick={() => {
                this.setState({
                  avtiveIndex: 0,
                  cityId: 0,
                  currentCity: "全国",
                  abbreviation: "",
                });
              }}
            >
              重置
            </span>
            <span
              onClick={(e) => {
                this.props.getMapIdToData({
                  cityId: this.state.cityId,
                  currentCity: this.state.currentCity,
                  abbreviation: this.state.abbreviation,
                });
                e.stopPropagation();
                this.props.showFn();
              }}
            >
              确定
            </span>
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate(nextProps) {
    if (this.props.right === 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
}
