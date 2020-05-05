import axios from "axios";
import React, { Component } from "react";
import style from "../../../assets/css/active/group.module.scss";
import Loadding from "../../../components/common/Loadding";
import PageHeaderHref from "../../../components/common/PageHeaderHref";
export default class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
    };
  }
  render() {
    return (
      <div>
        <PageHeaderHref pageName={"拼团"}></PageHeaderHref>
        {this.state.groupList.length > 0 ? (
          <div>
            <div className={style["group"]}>
              {this.state.groupList.map((v) => (
                <div
                  className={style["group-item"]}
                  key={v.id}
                  onClick={() => {
                    this.props.history.push("/GroupDetail/" + v.id);
                  }}
                >
                  <div className={style["group-ele"]}>
                    <div className={style["ele-img"]}>
                      <img src={v.show_pic} alt="" />
                      <p className={style["active-exist"]}>
                        <span>活动结束</span>
                      </p>
                    </div>
                    <div className={style["ele-theme"]}>
                      <div className={style["theme-time"]}>
                        <span className={style["time-day"]}>
                          2020.{v.show_time_arr.md.split("").slice(0, 2)}.
                          {v.show_time_arr.md.split("").slice(3)}
                        </span>
                        <span className={style["time-hours"]}>
                          {v.show_time_arr.week} {v.show_time_arr.Hi}
                        </span>
                      </div>
                      <div className={style["theme-titile"]}>
                        <p>{v.show_name}</p>
                      </div>
                      <div className={style["theme-location"]}>
                        {v.show_city} | {v.venue_name}
                      </div>
                      <div className={style["group-detial"]}>
                        <span className={style["group-people"]}>
                          {v.group_number}人团
                        </span>
                        <span className={style["group-currentPrice"]}>
                          ¥{v.group_price}
                        </span>
                        <span className={style["group-oldPrice"]}>
                          ¥{v.ticket_price}
                        </span>
                      </div>
                      <div className={style["group-url"]}>去拼团</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style["load-more__tips"]}>没有更多了</div>
          </div>
        ) : (
          <Loadding></Loadding>
        )}
      </div>
    );
  }
  async componentDidMount() {
    const { list } = await axios.get(
      "Activity/Groupbuying/getList?page=1&version=6.1.1&referer=2"
    );
    this.setState({
      groupList: list,
    });
    console.log(list);
  }
}
