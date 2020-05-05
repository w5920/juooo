import axios from "axios";
import React, { Component } from "react";
import style from "../../../assets/css/GroupDetail/GroupDetail.module.scss";
import DetailPageHead from "../../../components/common/DetailPageHead";
import Loadding from "../../../components/common/Loadding";

export default class GroupDetail extends Component {
  constructor(props) {
    super(props);
    this.perormance = null;
    this.exhibition = null;
    this.showdom = null;
    this.state = {
      groupDetailList: [],
      nowPrice: [],
      savePrice: 0,
    };
  }
  render() {
    return this.state.savePrice / 1 > 0 ? (
      <div style={{ background: "#eee", paddingBottom: "2.26667rem" }}>
        <div className={style["head-detail"]}>
          <DetailPageHead detaileHead={"拼团详情"}></DetailPageHead>
          <div className={style["theme-detail"]}>
            <div className={style["theme-img"]}>
              <img src={this.state.groupDetailList.pic} alt="" />
            </div>
            <div className={style["theme-introduce"]}>
              <p> {this.state.groupDetailList.show_name}</p>
              <span className={style["save-Maxprice"]}>
                最高可省 {this.state.savePrice}元
              </span>
              <div>
                <span>￥{this.state.nowPrice.price}</span>
                <span className={style["old-price"]}>
                  ￥{this.state.groupDetailList.high_price}
                </span>
              </div>
            </div>
            <div className={style["group-people"]}>
              {this.state.nowPrice.group}人团
            </div>
          </div>
        </div>
        {/* 详细拼团情况 */}
        <div className={style["group-location"]}>
          <div className={style["group-detailIfomation"]}>
            <div className={style["group-data"]}>
              <div className={style["group-time"]}>2020.02.09</div>
              <div className={style["group-week"]}>周日 10:30</div>
            </div>
            <p className={style["group-city"]}>
              {this.state.city} | {this.state.venue}
            </p>
            <p className={style["detailLocation"]}>
              {this.state.venue_address}
            </p>
          </div>
          <div className={style["group-map"]}></div>
        </div>
        <div className={style["admission"]}>
          <div>
            <span>入场 ：</span>
            <p>{this.state.tips}</p>
          </div>
        </div>
        <div className={style["play"]}>
          <div className={style["play-title"]}>
            <h3>玩法介绍</h3>
            <span>规则 > </span>
          </div>
          {/* 玩法介绍 */}
          <div className={style["play-detail"]}>
            <div className={style["open"]}>
              <img src={require("../../../assets/img/group1.png")} alt="" />
              <div>
                <h3>开团/参团</h3>
              </div>
            </div>
            <span className={style["arrow"]}>></span>
            <div className={style["open"]}>
              <img src={require("../../../assets/img/group2.png")} alt="" />
              <div>
                <h3>邀好友参团</h3>
                <p>享受低价</p>
              </div>
            </div>
            <span className={style["arrow"]}>></span>
            <div className={style["open"]}>
              <img src={require("../../../assets/img/group3.png")} alt="" />
              <div>
                <h3>人满发货</h3>
                <p>不满自动退款</p>
              </div>
            </div>
          </div>
        </div>
        {/* 演出介绍 */}
        <div
          className={style["Performance-introduction"]}
          ref={(el) => (this.perormance = el)}
        >
          <h3>演出介绍</h3>
          <div className={style["intro__content"]}>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>【剧情简介】</strong>
            </p>
            <p>
              <br />
            </p>
            <p>
              树林里鸭妈妈家发生了一件奇怪的事儿，在孵化鸭宝宝的蛋当中，有一只特别的巨大。
            </p>
            <p>
              咔嚓、咔嚓，鸭宝宝出来了！咦？有一只为什么和其他鸭宝宝不一样？
            </p>
            <p>
              灰灰的羽毛，黑黑的嘴巴，大家都叫他：丑小鸭！丑小鸭好可怜，小伙伴们都不喜欢他，嫌弃他的样貌丑陋，但是鸭妈妈告诉他：美丽的外表不如拥有一颗美丽善良的心。丑小鸭遇到了落队的大雁、面狠心善的猎狗、成天只会生蛋的母鸡和会喵喵喵唱歌的猫咪，面对冒险与歧视，外表与内心谁更重要呢？
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src={require("../../../assets/img/groupDetail1.png")}
                alt=""
              />
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src={require("../../../assets/img/groupDetail7.png")}
                alt=""
              />
            </p>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>【演出亮点】</strong>
            </p>
            <p>
              <br />
            </p>
            <p>童话经典展现，打造更可玩味的舞台</p>
            <p>
              演出不只将原著内的人物剧情呈现，更是通过多个角色的互动，让观众对丑小鸭有更进一步的了解。猎狗、大雁、母鸡、小猫。让丑小鸭在冲突中成长，从多个方面刻画人物性格，让孩子和丑小鸭一同决策与成长。演出一方面将亲情、友情和梦想用歌舞的方式让人难以忘怀，另一方面又用诙谐幽默的戏剧手法让演出充满新意，细微之处彰显了制作的用心和表演的功力。
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src={require("../../../assets/img/groupDetail2.png")}
                alt=""
              />
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src={require("../../../assets/img/groupDetail3.png")}
                alt=""
              />
            </p>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <p>让孩子获得自信与前行的力量。</p>
            <p>
              孩子们在观看这部儿童剧的过程中，会潜意识地产生对丑小鸭成长经历的同情和理解，通过这种移情作用使他们在生活中学会尊重和包容，培养孩子在“黑暗中看到光明”的自信心和技巧，对他们的心理健康形成正向的激励和潜移默化的影响。让孩子懂得自信，学会在遇到困难的时候如何走出内心的阴霾，获得前行的力量。
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src={require("../../../assets/img/groupDetail4.png")}
                alt=""
              />
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src={require("../../../assets/img/groupDetail5.png")}
                alt=""
              />
            </p>
            <p>
              <br />
            </p>
            <p>
              <img
                src={require("../../../assets/img/groupDetail6.png")}
                alt=""
              />
            </p>
          </div>
          <div
            className={style["exhibition"]}
            ref={(el) => (this.exhibition = el)}
            onClick={() => {
              this.perormance.style.height = "100%";
              this.exhibition.style.display = "none";
              this.showdom.style.display = "none";
            }}
          >
            展示全部
          </div>
          <div
            className={style["showdom"]}
            ref={(el) => (this.showdom = el)}
          ></div>
        </div>
        {/* 底部 */}
        <div className={style["footer"]}>
          <button>活动已结束</button>
        </div>
      </div>
    ) : (
      <Loadding></Loadding>
    );
  }
  async componentDidMount() {
    const { item } = await axios.get(
      `Activity/Groupbuying/getDetail?id=${this.props.match.params.id}&group_id=&version=6.1.1&referer=2`
    );
    const savePrice = item.schedular_info.high_price - item.prices[0].price;
    console.log(item);
    const city = item.schedular_info.city;
    this.setState(
      {
        groupDetailList: item.schedular_info,
        nowPrice: item.prices[0],
        savePrice,
        city: item.schedular_info.city.city_name,
        venue: item.schedular_info.venue.venue_name,
        venue_address: item.schedular_info.venue.venue_address,
        tips: item.schedular_info.tips.desc,
      },
      () => {
        // console.log(
        //   this.state.groupDetailList,
        //   this.state.nowPrice,
        //   this.state.city,
        //   this.state.venue,
        //   this.state.venue_address,
        //   this.state.tips
        // );
      }
    );
  }
}
