import { ActivityIndicator, Carousel } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import style from "../../assets/css/home/home.module.css";
import Loadding from "../../components/common/Loadding";
import WaterfallEle from "../../components/common/WaterfallEle";
import homeAction from "../../store/actionCreator/home";
class Home extends Component {
  constructor(props) {
    super(props);
    this.pageInde = 1;
    this.rewaterfall = null;
    this.reLeft = null; //瀑布流左边元素
    this.reRight = null; //瀑布流右边元素
    this.switch = false; //防止瀑布流请求过快  开始关闭 因为组件加载时会调用一次
    this.state = {
      vipFlag: false,
      vipIndex: 0,
      waterfallLeft: [],
      waterfallRight: [],
      homeIndex: 0,
    };
  }
  render() {
    return this.state.waterfallLeft.length > 0 ? (
      <div style={{ background: "#fff" }}>
        <div className={style["head"]}>
          <div
            className={style["head-address"]}
            onClick={() => {
              this.props.history.push("/selectCity");
            }}
          >
            <img src={require("../../assets/img/location.png")} alt="" />
            <span>
              {localStorage.getItem("CITY_INFO")
                ? JSON.parse(localStorage.getItem("CITY_INFO")).cityName
                : "全国"}
            </span>
          </div>
          <div
            className={style["head-search"]}
            onClick={() => {
              this.props.history.push("/search");
            }}
          >
            <img src={require("../../assets/img/search.png")} alt="" />
            <input type="text" placeholder="搜索热门演出" />
          </div>
          <div
            className={style["head-calendar"]}
            onClick={() => {
              this.props.history.push("/Calendar");
            }}
          >
            <img src={require("../../assets/img/calendar.png")} alt="" />
          </div>
        </div>

        <div
          className={style["adv"]}
          style={{
            touchAction: "pan-y",
            display: this.props.homeLbList.length > 0 ? "block" : "none",
          }}
        >
          {this.props.homeLbList.length > 0 ? (
            <Carousel
              autoplay={this.state.vipFlag}
              infinite
              dots={false}
              autoplayInterval={4000}
              afterChange={(index) => this.setState({ homeIndex: index })}
            >
              {this.props.homeLbList.map((v) => (
                <img
                  key={v.image_url.substring(v.image_url.length - 7, -4)}
                  src={v.image_url}
                  alt=""
                />
              ))}
            </Carousel>
          ) : (
            <div></div>
          )}

          {this.props.homeLbList.length > 0 ? (
            <div className={style["adv-home-lb"]}>
              {this.props.homeLbList.map((v, i) => (
                <span
                  key={Math.random() * (9999 - 1000) + 10}
                  className={
                    this.state.homeIndex === i
                      ? style["adv-home-active"]
                      : style["adv-home-show"]
                  }
                ></span>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* 演出 音乐剧... */}
        <div className={style["typedetaile"]}>
          <ul>
            {this.props.classifyType.map((v, i) => (
              <li
                key={v.id}
                onClick={() => {
                  if (i <= 4) {
                    this.props.history.push(
                      "/showlibrary/" + v.category_id + ".html"
                    );
                  } else if (i / 1 === 5) {
                    this.props.history.push("/MyWallet");
                  } else if (i / 1 === 6) {
                    this.props.history.push("/BuyPlus");
                  } else if (i / 1 === 7) {
                    this.props.history.push("/vip/index/1");
                  } else if (i / 1 === 8) {
                    this.props.history.push("/Points");
                  } else if (i / 1 === 9) {
                    this.props.history.push("/activity");
                  }
                }}
              >
                <img src={v.pic} alt="" />
                <span>{v.name}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- vip折扣 --> */}
        <div className={style["vipscript"]}>
          <div className={style["vipadv"]}>
            <div
              className={style["vipadv-head"]}
              onClick={() => {
                this.props.history.push("/Vip");
              }}
            >
              <div className={style["vip-left"]}>
                <img src={require("../../assets/img/vipicon.png")} alt="" />
                <span>会员专属折扣</span>
              </div>
              <div className={style["vip-right"]}>
                <span>99元/年</span>
                <img src={require("../../assets/img/arrow.png")} alt="" />
              </div>
              <div className={style["vipdiscount-line"]}></div>
            </div>

            {this.props.vipDiscount.length > 0 ? (
              <Carousel
                autoplay={this.state.vipFlag}
                infinite
                dots={false}
                autoplayInterval={3000}
                afterChange={(index) => this.setState({ vipIndex: index })}
                style={{ touchAction: "pan-y" }}
              >
                {this.props.vipDiscount.map((v) => (
                  <div
                    onClick={() => {
                      this.props.history.push(
                        "/ShowDetail/" + v.schedular_id + ".html"
                      );
                    }}
                    className={style["viplb"]}
                    key={v.schedular_id}
                    style={{ minHeight: "2.85333rem" }}
                  >
                    <div className={style["viplb-left"]}>
                      <img src={v.pic} alt="" />
                    </div>
                    <div className={style["viplb-right"]}>
                      <p>{v.schedular_name}</p>
                      <div>
                        <span className={style["discount"]}>
                          <mark className={style["markk"]}>
                            {v.min_discount}
                          </mark>
                          折起
                        </span>
                        <span className={style["panicbuing"]}>立即抢购</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className={style["advbottom"]}>
          <div>
            {this.props.vipDiscount.length > 0 ? (
              this.props.vipDiscount.map((v, i) => (
                <span
                  key={i}
                  className={
                    this.state.vipIndex === i
                      ? style["advActive"]
                      : style["advshow"]
                  }
                ></span>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>

        {/* <!-- vip广告 --> */}
        <div
          className={style["vipmsg"]}
          onClick={() => {
            this.props.history.push("/BuyPlus");
          }}
        >
          <img src={require("../../assets/img/vipmsg.png")} alt="" />
        </div>

        {/* <!-- 热门演出 --> */}
        {this.props.hotRecommendList.length > 0 ? (
          <div className={style["hotshow"]}>
            <div className={style["hotshowTitle"]}>
              <p className={style["hot"]}>热门演出</p>
              <p
                className={style["hotAll"]}
                onClick={() => {
                  this.props.history.push("/showlibrary/" + 0 + ".html");
                }}
              >
                <span>全部</span>
                <span className={style["hotlink"]}>
                  <img src={require("../../assets/img/arrow.png")} alt="" />
                </span>
              </p>
            </div>
            <div className={style["hotshowlist"]}>
              <ul>
                {this.props.hotRecommendList.map((v, i) => {
                  // console.log(v)
                  return (
                    <li
                      key={v.schedular_url.substring(
                        v.schedular_url.length - 6
                      )}
                      onClick={() => {
                        this.props.history.push(
                          "/ShowDetail/" +
                            v.schedular_url.substring(
                              v.schedular_url.length - 6
                            ) +
                            ".html"
                        );
                      }}
                    >
                      <div>
                        <img src={v.pic} />
                      </div>
                      <p>{v.show_name}</p>
                      {/* 根据id获取详情 {(v.schedular_url).substring(v.schedular_url.length - 6)} */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {/* 循回演出 */}
        {this.props.tuorShowList.length > 0 ? (
          <div
            className={style["tourshow"]}
            style={{
              display:
                JSON.parse(localStorage.getItem("CITY_INFO")).cityId / 1 === 0
                  ? "block"
                  : "none",
            }}
          >
            <div className={style["hotshowTitle"]}>
              <p className={style["hot"]}>巡回演出</p>
              <p
                className={style["hotAll"]}
                onClick={() => {
                  this.props.history.push(`/touring/2.html`);
                }}
              >
                <span>全部</span>
                <span className={style["hotlink"]}>
                  <img src={require("../../assets/img/arrow.png")} alt="" />
                </span>
              </p>
            </div>
            {this.props.tuorShowList.map((v) => (
              <div
                className={style["tourintroduce"]}
                key={v.id}
                onClick={() => {
                  this.props.history.push("/tourShowInfo/" + v.id + ".html");
                }}
              >
                <div className={style["tourimg"]}>
                  <img src={v.mobile_col_img} alt="" />
                </div>
                <div className={style["tour-schedule"]}>
                  <p className={style["tour-time"]}>2020.08.13 - 10.03</p>
                  <p className={style["tour-title"]}>{v.name}</p>
                  <div className={style["tour-price"]}>
                    <mark>￥</mark>
                    <mark>{v.min_price}</mark>
                    <span>起</span>
                  </div>
                  <div className={style["tour-location"]}>
                    <div className={style["tour-location-num"]}>
                      <span>6</span>
                      <span>巡城演</span>
                    </div>
                    <div className={style["tour-detaile-location"]}>
                      {v.citys.map((item) => (
                        <span key={item.id}>
                          {item.name}
                          <i>|</i>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {/* 舞台剧 */}
        <div
          className={style["stageplay"]}
          style={{
            display:
              JSON.parse(localStorage.getItem("CITY_INFO")).cityId / 1 === 0
                ? "block"
                : "none",
          }}
        >
          <div className={style["hotshowTitle"]}>
            <p className={style["hot"]} style={{ marginLeft: "0.4rem" }}>
              舞台剧
            </p>
            <p
              className={style["hotAll"]}
              onClick={() => {
                this.props.history.push("/showlibrary/37.html");
              }}
            >
              <span>全部</span>
              <span className={style["hotlink"]}>
                <img src={require("../../assets/img/arrow.png")} alt="" />
              </span>
            </p>
          </div>
          <div
            className={style["stageitem"]}
            onClick={() => {
              this.props.history.push("/ShowDetail/112293" + ".html");
            }}
          >
            <div className={`${style["tourimg"]} ${style["tourimg-logo"]}`}>
              <img src={require("../../assets/img/Stage.png")} alt="" />
              <div className={style["juooobookslog"]}></div>
            </div>
            <div className={style["stagetime"]}>
              <p className={style["stages-date"]}>
                <strong>2020.07.03</strong>
                <span>周五 20:00</span>
              </p>
              <p className={style["stage-title"]}>
                【演出延期】2020第七届城市戏剧节荒诞喜剧《劫出人生》-深圳站
              </p>
              <p className={style["stage-tip"]}>
                深圳 | 南山文体中心剧院小剧院
              </p>
            </div>
          </div>
          <div className={`${style["hotshowlist"]} ${style["stagelist"]}`}>
            <ul>
              <li
                onClick={() => {
                  this.props.history.push("/ShowDetail/112259" + ".html");
                }}
              >
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>
                  【演出延期】2020第七届城市戏剧节
                  乌镇戏剧节“最佳戏剧奖”“最佳个人表现奖”团队最新作品《涂红》-深圳站
                </p>
                <span className={style["stage-price"]}>
                  <strong>￥99</strong>
                  <span>起</span>
                </span>
              </li>
              <li
                onClick={() => {
                  this.props.history.push("/ShowDetail/110514" + ".html");
                }}
              >
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/Stage1.jpg")} />
                </div>
                <p>
                  【演出延期】2020第七届城市戏剧节
                  马修·伯恩经典全男版芭蕾舞剧《天鹅湖》高清影像-深圳站
                </p>
                <span className={style["stage-price"]}>
                  <strong>￥99</strong>
                  <span>起</span>
                </span>
              </li>
              <li
                onClick={() => {
                  this.props.history.push("/ShowDetail/110036" + ".html");
                }}
              >
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/Stage2.jpg")} />
                </div>
                <p>【演出延期】3D科幻舞台剧《三体Ⅱ黑暗森林》-深圳站</p>
                <span className={style["stage-price"]}>
                  <strong>￥180</strong>
                  <span>起</span>
                </span>
              </li>
              <li
                onClick={() => {
                  this.props.history.push("/ShowDetail/109024" + ".html");
                }}
              >
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/Stage3.jpg")} />
                </div>
                <p>四川人民艺术剧院-话剧《苏东坡》-石家庄</p>
                <span className={style["stage-price"]}>
                  <strong>￥50</strong>
                  <span>起</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 为你推荐 */}
        <div>
          <div className={style["hotshowTitle"]}>
            <p className={style["hot"]} style={{ marginLeft: "0.4rem" }}>
              为你推荐
            </p>
          </div>
          <div
            className={style["recommend-waterfall"]}
            ref={(el) => (this.rewaterfall = el)}
          >
            <div
              className={style["recommend-left"]}
              ref={(el) => (this.reLeft = el)}
            >
              {/* 为你推荐 瀑布流 图片 */}
              {this.state.waterfallLeft.length > 0 ? (
                this.state.waterfallLeft.map((v) => (
                  <WaterfallEle {...v} key={v.schedular_id}></WaterfallEle>
                ))
              ) : (
                <ActivityIndicator size="large" />
              )}
            </div>
            <div
              className={style["recommend-right"]}
              ref={(el) => (this.reRight = el)}
            >
              {this.state.waterfallRight.length > 0 ? (
                this.state.waterfallRight.map((v) => (
                  <WaterfallEle {...v} key={v.schedular_id}></WaterfallEle>
                ))
              ) : (
                <ActivityIndicator size="large" />
              )}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Loadding></Loadding>
    );
  }
  componentWillMount() {
    if (!Boolean(JSON.parse(localStorage.getItem("CITY_INFO")))) {
      localStorage.setItem(
        "CITY_INFO",
        JSON.stringify({
          cityId: 0,
          cityName: "全国",
          abbreviation: "",
        })
      );
    }
  }
  componentDidMount() {
    this.props.gethotRecommendList();
    this.props.getVipHomeSchedular();
    this.props.getHotsRecommendList();
    this.props.getTourList();
    this.props.getShowListWaterPall.bind(this)();
    // console.log(this.waterfall, this.props.waterFallList)
    window.onscroll = () => {
      let maxScrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop; //body 实际高度
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //视口高度

      // //假设左边盒子高度最小
      let minDefaultDiv = this.reLeft;

      if (minDefaultDiv) {
        let minDefaultHeight = this.reLeft.scrollHeight;
        // waterfallEle.forEach()
        if (this.reLeft.scrollHeight > this.reRight.scrollHeight) {
          minDefaultHeight = this.reRight.scrollHeight;
        }
        if (maxScrollHeight > minDefaultHeight - clientHeight) {
          if (this.switch) {
            this.switch = false; //满足条件时 先关闭开关  获取数据异步程序
            this.props.getShowListWaterPall.bind(this)();
          }
        }
      }
    };
  }
  componentWillUpdate(nextProps, nextState) {
    if (this.state.vipFlag) {
      return;
    }
    if (this.props.vipDiscount.length > 0 || this.props.homeLbList.length > 0) {
      this.setState({
        vipFlag: true,
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    homeLbList: state.home.homeLbList,
    classifyType: state.home.classifyList,
    vipDiscount: state.home.vipCount,
    hotRecommendList: state.home.hotsRecommendList,
    tuorShowList: state.home.tourShowList,
    pageIndex: state.home.pageIndex,
    waterFallList: state.home.waterFallList,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(homeAction, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
