import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "../../../assets/css/Calendar/Calendar.module.scss";
import Drawer from "../../../components/common/Drawer";
import PageHeaderHref from "../../../components/common/PageHeaderHref";
import calenderCreators from "../../../store/actionCreator/calender";
class index extends Component {
  constructor(props) {
    super(props);
    this.navActive = 0;
    this.calendarList = ["日", "一", "二", "三", "四", "五", "六"];
    this.now = new Date();
    this.state = {
      mask: "none",
      right: "-7.84rem",
      clickActive: 0,
      cityId: 0,
      currentCity: "全国",
      calenderList: [],
      liAvtiveIndex: 0,
    };
  }
  showFn() {
    this.setState({
      mask: "none",
      right: "-7.84rem",
    });
  }
  getMapIdToData({ cityId, currentCity, abbreviation }) {
    this.setState(
      {
        cityId: cityId,
        currentCity: currentCity,
      },
      () => {
        // console.log(this.state.currentCity);
      }
    );
    // await this.props.defaultPageIndex.call(this); //重置为第一页
    // await this.props.getShowListWaterPall.call(this); //获取数据
  }
  preMonth() {
    this.now.setDate(1);
    this.now.setMonth(this.now.getMonth() - 1);
    this.riLi(this.now);
  }

  nextMonth() {
    this.now.setDate(1);
    this.now.setMonth(this.now.getMonth() + 1);
    this.riLi(this.now);
  }
  shangMonth(now) {
    var date = new Date(now);
    date.setDate(0);
    return date.getDate();
  }
  thisMonthWeek(now) {
    var date = new Date(now);
    date.setDate(1);
    var week = date.getDay();
    week = week == 0 ? 7 : week;
    return week;
  }
  thisMonthDays(now) {
    var date = new Date(now);
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
  }
  riLi(now) {
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    // console.log("day", day); //这个月过去的 颜色变暗
    const arr = [];
    // console.log(now);
    //   3个参数 day今天 isCurrentMonth是否本月或本月过去的天数  idToday是否今天
    let str = "";
    for (
      let i = this.shangMonth(now) - this.thisMonthWeek(now) + 1;
      i <= this.shangMonth(now);
      i++
    ) {
      arr.push({ day: i, isCurrentMonth: "none", isToday: false });
    }

    for (let i = 1; i <= this.thisMonthDays(now); i++) {
      if (day / 1 === i) {
        arr.push({ day: i, isCurrentMonth: "yes", isToday: true });
      } else if (day / 1 > i) {
        arr.push({ day: i, isCurrentMonth: "none", isToday: false });
      } else {
        arr.push({ day: i, isCurrentMonth: "yes", isToday: false });
      }
    }
    for (
      let i = 1;
      i <= 42 - this.thisMonthDays(now) - this.thisMonthWeek(now);
      i++
    ) {
      arr.push({ day: i, isCurrentMonth: "none", isToday: false });
    }
    this.currentMonth.innerHTML = `${year}年${month}月`;
    this.setState(
      {
        calenderList: arr,
      },
      () => {
        // console.log(this.state.calenderList);
      }
    );
  }
  render() {
    return (
      <div>
        <PageHeaderHref pageName="演出日历" rightShow={true}></PageHeaderHref>
        <div className={style["cande"]}></div>
        <div className={style["library-nav"]}>
          <Drawer
            {...this.state}
            showFn={this.showFn.bind(this)}
            drawerData={this.props.mapList}
            getMapIdToData={this.getMapIdToData.bind(this)}
          ></Drawer>
          <div className={style["nav"]}>
            <ul>
              <li
                className={
                  this.state.liAvtiveIndex / 1 === 0 ? style["liAvtive"] : ""
                }
                onClick={() => {
                  this.setState({
                    liAvtiveIndex: 0,
                  });
                }}
              >
                全国
              </li>
              {this.props.navList.map((v, i) => (
                <li
                  key={v.id}
                  className={
                    this.state.liAvtiveIndex / 1 === i + 1
                      ? style["liAvtive"]
                      : ""
                  }
                  onClick={() => {
                    this.setState({
                      liAvtiveIndex: i + 1,
                    });
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
            <span> {this.state.currentCity}</span>
            <span className={style["map-icon"]}>
              <img src={require("../../../assets/img/libraryMap.png")} alt="" />
            </span>
          </div>
        </div>
        <div className={style["calendar-bg"]}>
          <div className={style["current-month"]}>
            <div
              className={style["current-pre"]}
              onClick={() => {
                this.preMonth();
              }}
            >
              <div className={style["pre"]}></div>
            </div>
            <div
              className={style["current-data"]}
              ref={(el) => (this.currentMonth = el)}
            >
              2020年5月
            </div>
            <div
              className={style["current-pre"]}
              onClick={() => {
                this.nextMonth();
              }}
            >
              <div className={style["next"]}></div>
            </div>
          </div>
          <div className={style["week"]}>
            {this.calendarList.map((v, i) => (
              <div className={style["content"]} key={this.$randomKey()}>
                <div
                  className={`${style["content-day"]} ${
                    style[i === 0 || i === 6 ? "activeCalender" : ""]
                  }`}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div className={style["calendar"]} ref={(el) => (this.calender = el)}>
            {this.state.calenderList.length > 0 ? (
              this.state.calenderList.map((v) => (
                <div className={style["calendar-item"]} key={this.$randomKey()}>
                  <div
                    className={`${style["calendar-ele"]} ${
                      v.isCurrentMonth === "yes" ? "" : style["isCurrentMonth"]
                    } ${v.isToday === true ? style["calendarActive"] : ""} ${
                      v.isToday === true ? style["today"] : ""
                    } ${
                      this.state.clickActive === v ? style["clickActive"] : ""
                    } `}
                    onClick={() => {
                      this.setState({
                        clickActive: v,
                      });
                    }}
                  >
                    {v.day}
                  </div>
                </div>
              ))
            ) : (
              <div>数据正在奔跑中</div>
            )}
          </div>
        </div>
        <div className={style["calenderDataList"]}>没有更多了</div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getNavList();
    this.props.getMapList();
    this.props.getCalenderList();
    this.riLi(this.now);
    console.log(this.calender, this.currentMonth);
  }
}
const mapStateToProps = (state) => {
  return {
    navList: state.calender.navList,
    mapList: state.calender.mapList,
    calenderList: state.calender.calenderList,
    showList: state.calender.showList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(calenderCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
