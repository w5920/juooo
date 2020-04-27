import React, { Component } from "react";
import style from "../../assets/css/home/home.module.css";
class Home extends Component {
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
        <div class={style["adv"]}>
          <img src={require("../../assets/img/adv.jpg")} alt="" />
        </div>
        <div class={style["typedetaile"]}>
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
          <div className={style["hotshowlist"]}></div>
        </div>
      </div>
    );
  }
}

export default Home;
