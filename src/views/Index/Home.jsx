import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../../assets/css/home/home.module.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["1", "2", "3"],
      imgHeight: 176,
    };
  }
  render() {
    return (
      <div>
        <div className={style["head"]}>
          <div className={style["head-address"]}>
            <img src={require("../../assets/img/location.png")} alt="" />
            <span>全国</span>
          </div>
          <div className={style["head-search"]}>
            <img src={require("../../assets/img/search.png")} alt="" />
            <input type="text" placeholder="搜索热门演出" />
          </div>
          <div className={style["head-calendar"]}>
            <img src={require("../../assets/img/calendar.png")} alt="" />
          </div>
        </div>

        <div className={style["adv"]}>
          <img src={require("../../assets/img/adv.jpg")} alt="" />
        </div>
        <div className={style["typedetaile"]}>
          <ul>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
            <li>
              <img src={require("../../assets/img/m.png")} alt="" />
              <span>演唱会</span>
            </li>
          </ul>
        </div>
        {/* <!-- vip折扣 --> */}
        <div className={style["vipscript"]}>
          <div className={style["vipadv"]}>
            <div className={style["vipadv-head"]}>
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
            <div className={style["viplb"]}>
              <div className={style["viplb-left"]}>
                <img src={require("../../assets/img/books.jpg")} alt="" />
              </div>
              <div className={style["viplb-right"]}>
                <p>浪漫经典童话剧《美女与野兽》</p>
                <div>
                  <span className={style["discount"]}>
                    <mark className={style["markk"]}>5</mark>折起
                  </span>
                  <span className={style["panicbuing"]}>立即抢购</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["advbottom"]}>
          <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>

        {/* <!-- vip广告 --> */}
        <div className={style["vipmsg"]}>
          <img src={require("../../assets/img/vipmsg.png")} alt="" />
        </div>

        {/* <!-- 热门演出 --> */}
        <div className={style["hotshow"]}>
          <div className={style["hotshowTitle"]}>
            <p className={style["hot"]}>热门演出</p>
            <p className={style["hotAll"]}>
              <span>全部</span>
              <span className={style["hotlink"]}>
                <img src={require("../../assets/img/arrow.png")} alt="" />
              </span>
            </p>
          </div>
          <div className={style["hotshowlist"]}>
            <ul>
              <li>
                <div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
              </li>
              <li>
                <div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
              </li>
              <li>
                <div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
              </li>
              <li>
                <div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
              </li>
              <li>
                <div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 循回演出 */}
        <div className={style["tourshow"]}>
          <div className={style["hotshowTitle"]}>
            <p className={style["hot"]}>巡回演出</p>
            <p className={style["hotAll"]}>
              <span>全部</span>
              <span className={style["hotlink"]}>
                <img src={require("../../assets/img/arrow.png")} alt="" />
              </span>
            </p>
          </div>
          <div className={style["tourintroduce"]}>
            <div className={style["tourimg"]}>
              <img src={require("../../assets/img/tour.jpg")} alt="" />
            </div>
            <div className={style["tour-schedule"]}>
              <p className={style["tour-time"]}>2020.08.13 - 10.03</p>
              <p className={style["tour-title"]}>
                聚橙制作 | 法语音乐剧《摇滚红与黑》
              </p>
              <div className={style["tour-price"]}>
                <mark>￥</mark>
                <mark>80</mark>
                <span>起</span>
              </div>
              <div className={style["tour-location"]}>
                <div className={style["tour-location-num"]}>
                  <span>6</span>
                  <span>巡城演</span>
                </div>
                <div className={style["tour-detaile-location"]}>
                  <span>
                    上海
                    <i>|</i>
                  </span>
                  <span>
                    广州
                    <i>|</i>
                  </span>
                  <span>
                    深圳
                    <i>|</i>
                  </span>
                  <span>
                    成都
                    <i>|</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 舞台剧 */}
        <div className={style["stageplay"]}>
          <div className={style["hotshowTitle"]}>
            <p className={style["hot"]} style={{ marginLeft: "0.4rem" }}>
              舞台剧
            </p>
            <p className={style["hotAll"]}>
              <span>全部</span>
              <span className={style["hotlink"]}>
                <img src={require("../../assets/img/arrow.png")} alt="" />
              </span>
            </p>
          </div>
          <div className={style["stageitem"]}>
            <div className={`${style["tourimg"]} ${style["tourimg-logo"]}`}>
              <img src={require("../../assets/img/tour.jpg")} alt="" />
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
              <li>
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
                <span className={style["stage-price"]}>
                  <strong>￥99</strong>
                  <span>起</span>
                </span>
              </li>
              <li>
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
                <span className={style["stage-price"]}>
                  <strong>￥99</strong>
                  <span>起</span>
                </span>
              </li>
              <li>
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
                <span className={style["stage-price"]}>
                  <strong>￥99</strong>
                  <span>起</span>
                </span>
              </li>
              <li>
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
                <span className={style["stage-price"]}>
                  <strong>￥99</strong>
                  <span>起</span>
                </span>
              </li>
              <li>
                <div className={style["tourimg-logo"]}>
                  <div className={style["juooobookslog"]}></div>
                  <img src={require("../../assets/img/hoot.jpg")} />
                </div>
                <p>2020第七届城市戏剧节 《涂红》-石家庄站</p>
                <span className={style["stage-price"]}>
                  <strong>￥99</strong>
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
          <div className={style["recommend-waterfall"]}>
            <div className={style["recommend-left"]}>
              {/* 为你推荐 瀑布流 图片 */}
              <div className={style["recommend-img"]}>
                <img src={require("../../assets/img/recommend.jpg")} alt="" />
                <span className={style["recommend-tip"]}>深圳</span>
              </div>
              <div className={style["recommend-title"]}>
                <div className={style["sponsor"]}>
                  <img src={require("../../assets/img/i.png")} alt="" />
                  <p>
                    【演出延期】聚橙出品
                    |百老汇现象级原版音乐剧《来自远方》-深圳站
                  </p>
                </div>
                <p className={style["sponsor-time"]}>2020.06.12 - 06.14</p>
                <div className={style["sopnsor-prince"]}>
                  <span>￥280</span>
                  <span>起</span>
                </div>
                <div className={style["sopnsor-service"]}>
                  <span>电子票</span>
                  <span>可选座</span>
                  <span>限时8折起</span>
                </div>
              </div>
            </div>
            <div className={style["recommend-right"]}>
              <div className={style["recommend-img"]}>
                <img src={require("../../assets/img/recommend.jpg")} alt="" />
                <span className={style["recommend-tip"]}>深圳</span>
              </div>
              <div className={style["recommend-title"]}>
                <div className={style["sponsor"]}>
                  <img src={require("../../assets/img/i.png")} alt="" />
                  <p>
                    【演出延期】聚橙出品
                    |百老汇现象级原版音乐剧《来自远方》-深圳站
                  </p>
                </div>
                <p className={style["sponsor-time"]}>2020.06.12 - 06.14</p>
                <div className={style["sopnsor-prince"]}>
                  <span>￥280</span>
                  <span>起</span>
                </div>
                <div className={style["sopnsor-service"]}>
                  <span>电子票</span>
                  <span>可选座</span>
                  <span>限时8折起</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
