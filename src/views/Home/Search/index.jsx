import { ActivityIndicator } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import style from "../../../assets/css/home/search.module.css";
import WaterfallEle from "../../../components/common/WaterfallEle";
import searchActionType from "../../../store/actionCreator/search";
class index extends Component {
  constructor(props) {
    super(props);
    this.searchValue = "";
    this.ipt = null; //input 元素
    this.state = {
      waterfallLeft: [],
      waterfallRight: [],
      resetPage: true,
    };
  }
  render() {
    return (
      <div className={style["index-search"]}>
        <div className={style["head"]}>
          <div className={style["search-ipt"]}>
            <img
              className={style["search-left"]}
              src={require("../../../assets/img/search.png")}
              alt=""
            />
            <input
              onChange={(e) => {
                this.searchValue = e.target.value;
                const arr = JSON.parse(localStorage.getItem("arr"));
                if (!arr.includes(e.target.value)) {
                  arr.unshift(e.target.value);
                }
                localStorage.setItem("arr", JSON.stringify(arr));
                this.props.getSearchDate.call(this, this.searchValue);
              }}
              ref={(el) => (this.ipt = el)}
              type="text"
              placeholder={"搜索热门演出"}
            />
            <img
              onClick={() => {
                this.searchValue = "";
                this.ipt.value = "";
                this.props.getSearchDate.call(this, "");
              }}
              className={style["search-left"]}
              src={require("../../../assets/img/x.png")}
              alt=""
            />
          </div>
          <span
            onClick={() => {
              this.props.history.go(-1);
            }}
          >
            取消
          </span>
        </div>
        <div>
          {this.props.searchData.length > 0 ? (
            <div style={{ padding: "0 0.4rem" }}>
              <div style={{ float: "left", marginRight: "0.1rem" }}>
                {this.state.waterfallLeft.map((v, i) => (
                  <WaterfallEle {...v} key={v.schedular_id}></WaterfallEle>
                ))}
              </div>
              <div style={{ float: "left" }}>
                {this.state.waterfallRight.map((v, i) => (
                  <WaterfallEle {...v} key={v.schedular_id}></WaterfallEle>
                ))}
              </div>
            </div>
          ) : (
            <div className={style["hots-search"]}>
              {JSON.parse(localStorage.getItem("arr")).length > 0 ? (
                <React.Fragment>
                  <p style={{ position: "relative" }}>
                    历史搜索
                    <img
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "0.53333rem",
                        height: "0.53333rem",
                      }}
                      onClick={() => {
                        localStorage.setItem("arr", JSON.stringify([]));
                        this.setState({
                          resetPage: true,
                        });
                      }}
                      src={require("../../../assets/img/delete.png")}
                      alt=""
                    />
                  </p>
                  <ul style={{ marginBottom: "0.8rem" }}>
                    {JSON.parse(localStorage.getItem("arr")).map((v) => (
                      <li
                        onClick={(e) => {
                          this.searchValue = e.target.innerText;
                          this.props.getSearchDate.call(this, this.searchValue);
                        }}
                        key={Math.random() * (9999 - 1000) + 10}
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ) : (
                <div style={{ height: "0" }}></div>
              )}
              <p>热门搜索</p>
              <ul>
                {this.props.hortSearch.length > 0 ? (
                  this.props.hortSearch.map((v) => (
                    <li
                      onClick={(e) => {
                        this.searchValue = e.target.innerText;
                        const arr = JSON.parse(localStorage.getItem("arr"));
                        if (!arr.includes(e.target.innerText)) {
                          arr.unshift(e.target.innerText);
                        }
                        localStorage.setItem("arr", JSON.stringify(arr));
                        this.props.getSearchDate.call(this, this.searchValue);
                      }}
                      key={Math.random() * (9999 - 1000) + 10}
                    >
                      {v.word}
                    </li>
                  ))
                ) : (
                  <ActivityIndicator size="large" />
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
  componentWillMount() {
    if (!Boolean(JSON.parse(localStorage.getItem("arr")))) {
      localStorage.setItem("arr", JSON.stringify([]));
    }
  }
  componentDidMount() {
    this.props.getDefaultSearch();
  }
}
const mapStateToProps = (state) => {
  return {
    hortSearch: state.search.searchInit,
    searchData: state.search.searchData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(searchActionType, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index));
