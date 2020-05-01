import pubsub from "pubsub-js";
import React, { Component } from "react";
import style from "../../../assets/css/detail/detail.module.scss";
export default class index extends Component {
  render() {
    pubsub.subscribeOnce("tourshow", (msgName, content) => {
      console.log(msgName, content);
    });
    return (
      <div className={style["detail"]}>
        <div className={style["head-detail"]}>
          <div className={style["head-nav"]}>
            <p>演出详情</p>
          </div>
          <div className={style["theme-detail"]}>
            <div className={style["theme-img"]}>
              <img src={require("../../../assets/img/Stage.png")} alt="" />
              <img
                className={style["juooobookslog"]}
                src={require("../../../assets/img/juooobookslog.png")}
                alt=""
              />
            </div>
            <div className={style["theme-introduce"]}>
              <p>【小橙堡】经典励志人偶剧《丑小鸭》-固安站</p>
              <span>￥50-90</span>
            </div>
          </div>
        </div>
        {/* //详情服务 */}
        <div style={{ background: "#FFF" }}>
          <div className={style["detail-service"]}>
            <div>
              <i></i>
              <span>可选座</span>
            </div>
            <div>
              <i></i>
              <span>套票优惠</span>
            </div>{" "}
            {/*详情信息*/}
            <span className={style["detail-tips"]}>?</span>
          </div>
        </div>
        {/*详情信息*/}
        <div className={style["brief"]}>
          <div className={style["brief-detail"]}>
            <div className={style["brief-time"]}>
              <p>2020.06.04 - 06.06</p>
              <img src={require("../../../assets/img/arrow.png")} alt="" />
            </div>
            <p className={style["brief-place"]}>
              深圳 | 南山文体中心剧院大剧院
            </p>
          </div>
          <div className={style["brief-img"]}>
            <img src={require("../../../assets/img/location.png")} alt="" />
          </div>
        </div>
        {/* 橙vip 广告 */}
        <div className={style["detaile-adv"]}>
          <div className={style["detaile-plus-adv"]}>
            <div className={style["plus-card"]}>橙PLUS卡</div>
            <p className={style["plus-discount"]}>开通送￥200 最高省86.6元</p>
            <p className={style["immediately-card"]}>立即开卡</p>
            <p className={style["plus-img"]}>
              <img src={require("../../../assets/img/arrow.png")} alt="" />
            </p>
          </div>
        </div>
        {/* vip+ 入场 */}
        <div className={style["show-benefit"]}>
          <div className={style["show-benefit-vip"]}>
            <span className={style["vip_one"]}>VIP+</span>
            <span className={style["vip_two"]}>:</span>
            <div className={style["vip_there"]}>
              <span>V+会员享</span>
              <span>国内免邮 + 双倍积分</span>
              <div className={style["plus-img"]}>
                <img src={require("../../../assets/img/arrow.png")} alt="" />
              </div>
            </div>
          </div>
          <div className={style["show-benefit-admission"]}>
            <div className={style["show-benefit-vip"]}>
              <span className={style["vip_one"]}>入场</span>
              <span className={style["vip_two"]}>:</span>
              <p className={style["admission-condition"]}>
                <span>
                  1.1米以上儿童凭票入场，1.1米以下儿童谢绝入场，凭票入场，对号入座
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* 演出介绍 */}
        <div className={style["Performance-introduction"]}>
          <h3>演出介绍</h3>
          <div className={style["detail-introduction"]}>
            <p>
              <img
                className={style["detail-introduction-img"]}
                src={require("../../../assets/img/detail.png")}
                alt=""
              />
            </p>
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
            <img
              className={style["introduction-img"]}
              src={require("../../../assets/img/detail1.png")}
              style={{ marginBottom: "0.5rem" }}
              alt=""
            />
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
        {/* 温馨提示 */}
        <div className={style["remind"]}>
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
        <div className={style["relevant-recommend"]}>
          <h3>相关推荐</h3>
          <div className={style["relevant-detail"]}>
            {/* 相关推荐元素 */}
            <div className={style["relevant-detail-ele"]}>
              <div className={style["relevant-detail-item"]}>
                <div className={style["relevant-detail-item-img"]}>
                  <img
                    src={require("../../../assets/img/relavant.jpg")}
                    alt=""
                  />
                </div>
                <div className={style["relevant-detail-item-introduce"]}>
                  <p className={style["relevant-detail-time"]}>
                    <span>2020.06.20</span>
                    <span>周六 19:30</span>
                  </p>
                  <p className={style["relevant-detail-topic"]}>
                    【演出延期】2020第七届城市戏剧节
                    NT-Live艾美奖得主菲比主演《伦敦生活》高清影像-深圳站
                  </p>
                  <p className={style["relevant-detail-location"]}>
                    深圳 | 南山文体中心剧院大剧院
                  </p>
                  <p className={style["relevant-detail-severve"]}>
                    <span>电子票</span>
                    <span>可选座</span>
                  </p>
                  <p className={style["relevant-detail-price"]}>
                    <strong>￥99</strong>
                    <span>起</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={style["relevant-detail-ele"]}>
              <div className={style["relevant-detail-item"]}>
                <div className={style["relevant-detail-item-img"]}>
                  <img
                    src={require("../../../assets/img/relavant.jpg")}
                    alt=""
                  />
                </div>
                <div className={style["relevant-detail-item-introduce"]}>
                  <p className={style["relevant-detail-time"]}>
                    <span>2020.06.20</span>
                    <span>周六 19:30</span>
                  </p>
                  <p className={style["relevant-detail-topic"]}>
                    【演出延期】2020第七届城市戏剧节
                    NT-Live艾美奖得主菲比主演《伦敦生活》高清影像-深圳站
                  </p>
                  <p className={style["relevant-detail-location"]}>
                    深圳 | 南山文体中心剧院大剧院
                  </p>
                  <p className={style["relevant-detail-severve"]}>
                    <span>电子票</span>
                    <span>可选座</span>
                  </p>
                  <p className={style["relevant-detail-price"]}>
                    <strong>￥99</strong>
                    <span>起</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["detailFooter"]}>
          <div className={style["customer-service"]}>
            <img src={require("../../../assets/img/kf.png")} alt="" />
            <span>客服</span>
          </div>
          <div className={style["customer-pay"]}>选座购买</div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.match);
  }
  componentWillUnmount() {
    pubsub.unsubscribe("tourshow");
  }
}
