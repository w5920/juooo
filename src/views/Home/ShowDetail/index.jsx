import { ActivityIndicator, Toast } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import style from "../../../assets/css/detail/detail.module.scss";
import ActionPanel from "../../../components/common/ActionPanel";
import DetailPageHead from "../../../components/common/DetailPageHead";
import Reminder from "../../../components/common/Reminder";
import detailAction from "../../../store/actionCreator/detail";
class index extends Component {
  constructor(props) {
    super(props);
    this.showP = null;
    this.state = {
      bottom: "-12.24rem",
      show: "none",
      ReminderBottom: "-12.24rem",
    };
  }

  actionFn() {
    this.setState({
      bottom: "-12.24rem",
    });
  }
  actionTipsFn() {
    this.setState({
      show: "none",
      ReminderBottom: "-12.24rem",
    });
  }
  render() {
    return (
      <div className={style["detail"]}>
        <div className={style["head-detail"]}>
          <DetailPageHead detaileHead={"演出详情"}></DetailPageHead>
          {/* <div className={style["head-nav"]}>
            <p>演出详情</p>
          </div> */}
          {this.props.detailData.length > 0 ? (
            this.props.detailData.map((v) => {
              return (
                <div className={style["theme-detail"]} key={v.show_id}>
                  <div className={style["theme-img"]}>
                    <img src={v.pic} alt="" />
                    <img
                      className={style["juooobookslog"]}
                      src={require("../../../assets/img/juooobookslog.png")}
                      alt=""
                    />
                  </div>
                  <div className={style["theme-introduce"]}>
                    <p>{v.show_name}</p>
                    <span>￥{v.price_range}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <ActivityIndicator size="large" />
          )}
        </div>
        {/* //详情服务 */}
        <div style={{ background: "#FFF" }}>
          {this.props.detailData.length > 0 ? (
            this.props.detailData.map((v) => (
              <div
                className={style["detail-service"]}
                key={Math.random() * 100 + 1924}
              >
                {v.support.list.map((item) => (
                  <div key={Math.random() * 100 + 1333}>
                    <i></i>
                    <span>{item}</span>
                  </div>
                ))}
                {/*详情信息*/}
                <span className={style["detail-tips"]}>?</span>
              </div>
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </div>
        {/*详情信息*/}
        {this.props.detailData.length > 0 ? (
          this.props.detailData.map((v) => (
            <div className={style["brief"]} key={v.cate_child_id}>
              <div className={style["brief-detail"]}>
                <div
                  className={style["brief-time"]}
                  onClick={() => {
                    this.setState({
                      bottom: "0",
                    });
                  }}
                >
                  <p>{v.show_time_data.show_time_start_display}</p>
                  <img src={require("../../../assets/img/arrow.png")} alt="" />
                </div>
                <p className={style["brief-place"]}>
                  {v.city.city_name} | {v.venue.venue_name}
                </p>
                <p className={v.venue.venue_address ? style["venue"] : ""}>
                  {v.venue.venue_address}
                </p>
              </div>
              <div
                className={style["brief-img"]}
                onClick={() => {
                  Toast.offline("敬请期待");
                }}
              >
                <img src={require("../../../assets/img/location.png")} alt="" />
              </div>
            </div>
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}

        {/* 橙vip 广告 */}
        <div className={style["detaile-adv"]}>
          <div className={style["detaile-plus-adv"]}>
            <div className={style["plus-card"]}>橙PLUS卡</div>
            {this.props.detailData.length > 0 ? (
              this.props.detailData.map((v) => (
                <p className={style["plus-discount"]} key={6324}>
                  开通送￥200 最高省{v.discount_max_price}元
                </p>
              ))
            ) : (
              <ActivityIndicator size="large" />
            )}

            <p className={style["immediately-card"]}>立即开卡</p>
            <p
              className={style["plus-img"]}
              onClick={() => {
                this.props.history.push("/Plus");
              }}
            >
              <img src={require("../../../assets/img/arrow.png")} alt="" />
            </p>
          </div>
        </div>
        {/* vip+ 入场 */}
        {this.props.detailData.length > 0 ? (
          this.props.detailData.map((v) => (
            <div className={style["show-benefit"]} key={v.cate_parent_id}>
              <div className={style["show-benefit-vip"]}>
                <span className={style["vip_one"]}>VIP+</span>
                <span className={style["vip_two"]}>:</span>
                <div className={style["vip_there"]}>
                  <span>V+会员享</span>
                  <span>国内免邮 + 双倍积分</span>
                  <div
                    className={style["plus-img"]}
                    onClick={() => {
                      this.props.history.push("/Vip");
                    }}
                  >
                    <img
                      src={require("../../../assets/img/arrow.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className={style["show-vip-line"]}></div>
              </div>
              <div className={style["show-benefit-admission"]}>
                <div className={style["show-benefit-vip"]}>
                  <span className={style["vip_one"]}>入场</span>
                  <span className={style["vip_two"]}>:</span>
                  <p className={style["admission-condition"]}>
                    <span>{v.tips.desc}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}

        {/* 演出介绍 */}
        <div className={style["Performance-introduction"]}>
          <h3>演出介绍</h3>
          <div
            className={style["detail-showAll-btn"]}
            onClick={(e) => {
              this.showP.style.display = "block";
              e.target.style.display = "none";
            }}
          >
            显示全部
          </div>
          <div className={`${style["detail-introduction"]}`}>
            <p>
              <img
                className={style["detail-introduction-img"]}
                src={require("../../../assets/img/detail.png")}
                alt=""
              />
            </p>
            <div
              ref={(el) => (this.showP = el)}
              className={style["detail-showAll"]}
            >
              <p
                className={`${style["detail-history"]} ${style["detail-color"]}`}
              >
                传奇归来！依旧大胆惊艳！
              </p>
              <p
                className={`${style["detail-history"]} ${style["detail-color"]}`}
              >
                男版《天鹅湖》颠覆经典
              </p>
              <p
                className={`${style["detail-history"]} ${style["detail-color"]}`}
                style={{ marginBottom: "0.4rem" }}
              >
                马修·伯恩最负盛名的芭蕾舞剧
              </p>
              <p
                className={`${style["detail-history"]} ${style["detail-redcolor"]}`}
              >
                芭蕾舞剧《天鹅湖》
              </p>
              <p
                className={`${style["detail-history"]} ${style["detail-redcolor"]}`}
              >
                Swan Lake
              </p>
              <p
                className={`${style["detail-history"]} ${style["detail-redcolor"]}`}
              >
                （英文对白，中文字幕）
              </p>
              <p
                className={`${style["detail-history"]} ${style["detail-redcolor"]}`}
                style={{ marginBottom: "0.4rem" }}
              >
                北京奥哲维文化传播有限公司独家发行
              </p>
              <p>
                传奇归来！马修·伯恩爵士与新冒险舞团最负盛名的当代芭蕾经典《天鹅湖》将登上大银幕，再掀热潮！
              </p>
              <p>
                <img
                  className={style["introduction-img"]}
                  src={require("../../../assets/img/detail1.png")}
                  style={{ marginBottom: "0.5rem" }}
                  alt=""
                />
              </p>
              <p>
                这版是2019年早些时候在伦敦沙德勒之井（Sadler's
                Wells）录制的。凭借音乐剧《舞出我天地》获得奥利弗奖、曾在《灰姑娘》中以“天使”一角给大家留下深刻印象的利亚姆·莫维尔（Liam
                Mower）在本版中出演王子，威尔·博泽尔（Will
                Bozier）出演头鹅和陌生来客。同样的演出阵容在中国巡演时获得极高评价，一票难求；而在高清镜头的捕捉下，全男班天鹅的标志性元素大胆惊艳，野性十足；最新的舞台设计与灯光设计则更加细腻地营造出极具张力的戏剧感，将对自由的追求和对自我的探寻展现得淋漓尽致。
              </p>
              <p>
                <img
                  className={style["introduction-img"]}
                  src={require("../../../assets/img/detail2.png")}
                  style={{ marginBottom: "0.5rem" }}
                  alt=""
                />
              </p>
              <p>
                被《泰晤士报》誉为“世界现象级作品”的《天鹅湖》首演于1995年，沿用柴可夫斯基的音乐，却以全男班天鹅的设定重新诠释经典，以颠覆的姿态和勃发的生命力震惊了当代舞蹈界。首演25年来，先后获得包括奥利弗最佳新编舞蹈制作奖、托尼奖最佳编舞、最佳导演、最佳服装在内的30多个国际奖项，成为伦敦西区和百老汇最长演的芭蕾舞剧，世界巡演也依旧场场爆满。马修·伯恩爵士本人则被《纽约客》杂志誉为“西方最受欢迎编舞”，多次获得奥利弗奖与托尼奖，并作为现代舞第一人获封大英帝国官佐勋章（OBE）、汉堡莎士比亚艺术奖（Shakespeare
                Prize for the Arts），和英国精神大奖（The British Inspiration
                Award）。
              </p>
              <p>
                <img
                  className={style["introduction-img"]}
                  src={require("../../../assets/img/detail3.png")}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        {/* 温馨提示 */}
        <div
          className={style["remind"]}
          onClick={() => {
            this.setState({
              show: "block",
              ReminderBottom: 0,
            });
          }}
        >
          <div className={style["remind-title"]}>
            <h3>温馨提醒</h3>
            <img src={require("../../../assets/img/arrow.png")} alt="" />
          </div>
          <div className={style["remind-severce"]}>
            <p>
              <i></i>
              <span>配送说明</span>
            </p>
            <p>
              <i></i>
              <span>订票说明</span>
            </p>
            <p>
              <i></i>
              <span>确认订单</span>
            </p>
            <p>
              <i></i>
              <span>购票提醒</span>
            </p>
          </div>
        </div>
        {/* 相关推荐 */}
        <div className={style["relevant-recommend"]}>
          <h3>相关推荐</h3>
          <div className={style["relevant-detail"]}>
            {/* 相关推荐元素 */}

            {this.props.detailRelevant.length > 0 ? (
              this.props.detailRelevant.map((v) => (
                <div
                  className={style["relevant-detail-ele"]}
                  key={v.schedular_id}
                  onClick={() => {
                    this.props.history.push(
                      "/Reset/" + v.schedular_id + ".html"
                    );
                  }}
                >
                  <div className={style["relevant-detail-item"]}>
                    <div className={style["relevant-detail-item-img"]}>
                      <img src={v.pic} alt="" />
                    </div>
                    <div className={style["relevant-detail-item-introduce"]}>
                      <p className={style["relevant-detail-time"]}>
                        <span>{v.start_show_time}</span>
                        <span>{v.show_time_bottom}</span>
                      </p>
                      <p className={style["relevant-detail-topic"]}>{v.name}</p>
                      <p className={style["relevant-detail-location"]}>
                        {v.city_name} | {v.venue_name}
                      </p>
                      <p className={style["relevant-detail-severve"]}>
                        {v.support_desc.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </p>
                      <p className={style["relevant-detail-price"]}>
                        <strong>￥{v.min_price}</strong>
                        <span>起</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <ActivityIndicator size="large" />
            )}
          </div>
        </div>
        {/* 底部购买 */}
        <div className={style["detailFooter"]}>
          <div
            className={style["customer-service"]}
            onClick={() => {
              Toast.offline("敬请期待");
            }}
          >
            <img src={require("../../../assets/img/kf.png")} alt="" />
            <span>客服</span>
          </div>
          <div
            className={style["customer-pay"]}
            onClick={() => {
              this.setState({
                bottom: "0",
              });
            }}
          >
            选座购买
          </div>
          {this.props.detailTime.length > 0 ? (
            <ActionPanel
              bottom={this.state.bottom}
              actionFn={this.actionFn.bind(this)}
              ActionData={this.props.detailTime}
            ></ActionPanel>
          ) : (
            <ActivityIndicator size="large" />
          )}
          <Reminder
            {...{ show: this.state.show, bottom: this.state.ReminderBottom }}
            actionFn={this.actionTipsFn.bind(this)}
          ></Reminder>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getDetailData.call(this);
  }
}
const mapStateToProps = (state) => {
  return {
    detailData: state.detail.detailData,
    detailRelevant: state.detail.detailRelevant,
    detailTime: state.detail.detailTime, //选座购买的时间
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(detailAction, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index));
