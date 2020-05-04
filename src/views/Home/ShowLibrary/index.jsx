import { ActivityIndicator } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "../../../assets/css/library/library.module.css";
import Drawer from "../../../components/common/Drawer";
import PageHeaderHref from "../../../components/common/PageHeaderHref";
import WaterfallEle from "../../../components/common/WaterfallEle";
import libraryAction from "../../../store/actionCreator/library";
class index extends Component {
  constructor(props) {
    super(props);
    this.category = 0; //演出类型
    this.city = 0; //演出城市
    this.pageIndex = 1;
    this.switch = false; //防止瀑布流滑动数据加载过快
    this.reLeft = null; //瀑布流左边盒子
    this.reRight = null; //瀑布流右边边盒子
    this.navActive = 0;
    this.currentCity = "全国";
    this.state = {
      libraryLeft: [],
      libraryRight: [],
      mask: "none",
      right: "-7.84rem",
    };
  }
  showFn() {
    this.setState({
      mask: "none",
      right: "-7.84rem",
    });
  }
  async getMapIdToData({ cityId, currentCity, abbreviation }) {
    const cityReset = JSON.parse(localStorage.getItem("CITY_INFO"));
    cityReset.cityId = cityId;
    cityReset.cityName = currentCity;
    cityReset.abbreviation = abbreviation;
    await localStorage.setItem("CITY_INFO", JSON.stringify(cityReset));
    // this.city = cityId;
    // this.currentCity = currentCity;
    await this.props.defaultPageIndex.call(this); //重置为第一页
    await this.props.getShowListWaterPall.call(this); //获取数据
  }
  render() {
    return (
      <React.Fragment>
        <div className={style["library-content"]}>
          {true ? (
            <div>
              <PageHeaderHref
                pageName={"演出"}
                rightShow={true}
              ></PageHeaderHref>
              <div className={style["library-nav"]}>
                <Drawer
                  {...this.state}
                  showFn={this.showFn.bind(this)}
                  drawerData={this.props.libraryMap}
                  getMapIdToData={this.getMapIdToData.bind(this)}
                ></Drawer>
                <div className={style["nav"]}>
                  <ul>
                    <li
                      className={
                        this.category / 1 === 0 ? style["liAvtive"] : ""
                      }
                      onClick={async () => {
                        // this.navActive = 0;
                        this.category = 0;
                        // this.props/
                        await this.props.defaultPageIndex.call(this);
                        await this.props.getShowListWaterPall.call(this);
                      }}
                    >
                      全国
                    </li>
                    {this.props.libraryNav.map((v, i) => (
                      <li
                        className={
                          this.category / 1 === v.id ? style["liAvtive"] : ""
                        }
                        key={v.id}
                        onClick={async () => {
                          // this.navActive = i + 1;
                          this.category = v.id;
                          await this.props.defaultPageIndex.call(this);
                          await this.props.getShowListWaterPall.call(this);
                        }}
                      >
                        {v.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={style["nav-map"]}
                  onClick={() => {
                    this.setState({ mask: "block", right: 0 });
                  }}
                >
                  <span>
                    {JSON.parse(localStorage.getItem("CITY_INFO")).cityName}
                  </span>
                  <span className={style["map-icon"]}>
                    <img
                      src={require("../../../assets/img/libraryMap.png")}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              {this.state.libraryLeft.length > 0 ? (
                <div className={style["library-waterfall"]}>
                  <div
                    className={style["library-left"]}
                    ref={(el) => (this.reLeft = el)}
                  >
                    {this.state.libraryLeft.map((v) => (
                      <WaterfallEle
                        {...v}
                        key={v.schedular_id + this.$randomKey()}
                      ></WaterfallEle>
                    ))}
                  </div>
                  <div
                    className={style["library-right"]}
                    ref={(el) => (this.reRight = el)}
                  >
                    {this.state.libraryRight.map((v) => (
                      <WaterfallEle
                        {...v}
                        key={v.schedular_id + this.$randomKey()}
                      ></WaterfallEle>
                    ))}
                  </div>
                </div>
              ) : (
                <div>暂无数据</div>
              )}
            </div>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </div>
      </React.Fragment>
    );
  }
  async componentDidMount() {
    if (this.props.match.params.category_id) {
      this.category = this.props.match.params.category_id;
      // console.log(this.category);
    }
    await this.props.getLibraryNav();
    await this.props.getLibraryMap();
    await this.props.getShowListWaterPall.call(this);

    //滑动事件
    window.onscroll = () => {
      let maxScrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop; //body 实际高度
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //视口高度

      // //假设左边盒子高度最小
      let minDefaultDiv = this.reLeft;
      // console.log(this.reLeft);
      let minDefaultHeight = minDefaultDiv.scrollHeight;
      // waterfallEle.forEach()
      if (this.reLeft.scrollHeight > this.reRight.scrollHeight) {
        minDefaultHeight = this.reRight.scrollHeight;
      }
      if (maxScrollHeight > minDefaultHeight - clientHeight) {
        if (this.switch) {
          this.switch = false; //满足条件时 先关闭开关  获取数据异步程序
          this.props.getShowListWaterPall.call(this);
        }
      }
    };
  }
}
const mapStateToProps = (state) => {
  return {
    libraryNav: state.library.libraryNav,
    libraryMap: state.library.libraryMap,
    libraryInit: state.library.libraryInit,
    pageIndex: state.library.pageIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(libraryAction, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
