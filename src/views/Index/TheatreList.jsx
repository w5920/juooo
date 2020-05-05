import axios from "axios";
import React, { Component } from "react";
import style from "../../assets/css/theatreList/theatreList.module.scss";
import Loadding from "../../components/common/Loadding";
class TheatreList extends Component {
  constructor(props) {
    super(props);
    this.racender = null;
    this.state = {
      theadList: [],
    };
  }

  render() {
    return this.state.theadList.length > 0 ? (
      <div>
        <div className={style["head"]}>
          <h3>剧院</h3>
        </div>
        <div className={style["theat"]}>
          <ul className={style["theat-content"]}>
            {this.state.theadList.map((v) => (
              <li
                key={v.id}
                style={{ display: v.showList.length === 0 ? "none" : "block" }}
                className={style["theat-content-distance"]}
              >
                <div className={style["theat-item"]}>
                  <div className={style["item-head"]}>
                    <div
                      className={style["head-detail"]}
                      onClick={() => {
                        this.props.history.push(
                          "/TheatreListDetail/" + v.id + "/" + v.vid
                        );
                      }}
                    >
                      <div className={style["head-img"]}>
                        <img src={v.pic} alt="" />
                      </div>
                      <div className={style["head-location"]}>
                        <p className={style["local"]}>{v.name}</p>
                        <p className={style["scene"]}>{v.count}场在售演出</p>
                      </div>
                    </div>
                    <div
                      className={style["head-top"]}
                      onClick={() => {
                        this.props.history.push(
                          "/TheatreListDetail/" + v.id + "/" + v.vid
                        );
                      }}
                    >
                      <img src={require("../../assets/img/top.png")} alt="" />
                    </div>
                  </div>
                  <div className={style["item-content"]}>
                    <div className={style["content-data"]}>
                      <ul>
                        {v.showList.map((item) => (
                          <li key={item.id}>
                            <div className={style["time-axis"]}>
                              <p>{item.show_time}</p>
                              <span className={style["time-axis-top"]}></span>
                            </div>
                            <div className={style["time-axis-img"]}>
                              <img src={item.pic} alt="" />
                            </div>
                          </li>
                        ))}
                        <li
                          style={{
                            display: v.showList.length > 8 ? "block" : "none",
                          }}
                        >
                          <div className={style["time-axis"]}>
                            <p>05月29日</p>
                            <span className={style["time-axis-top"]}></span>
                          </div>
                          <div className={style["time-axis-img"]}>
                            <p>查看更多></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <Loadding></Loadding>
    );
  }
  async componentDidMount() {
    const { theatre_list } = await axios.get(
      "theatre/index/getTheatreList?page=1&version=6.1.1&referer=2"
    );
    this.setState({
      theadList: theatre_list,
    });
    console.log(theatre_list);
  }
}

export default TheatreList;
