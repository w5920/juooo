import axios from "axios";
import homeActionType from "../../actionType/home";
const getClassifyList = (type, payload) => {
  return {
    type,
    payload,
  };
}
// //vip轮播图
// const getVipCount = payload => {
//   return {
//     type: homeActionType.GET_TOUR_LIST,
//     payload,
//   };
// }

// //热门演出‘
// const getHotsRecommend = payload => {
//   return {
//     type: homeActionType.GET_HOTS_RECOMMENDLIST,
//     payload,
//   };
// }

export default {
  // 获取推荐轮播图
  gethotRecommendList() {
    console.log(this, "gethotRecommendList");
    return async (dispatch) => {
      const data = await axios.get(
        "home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2"
      );
      dispatch(getClassifyList(homeActionType.GET_CLASSIFY_HOME, data.classify_list));
    };
  },
  getVipHomeSchedular() {
    return async (dispatch) => {
      const data = await axios.get(
        "vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2"
      );
      // console.log(data)
      dispatch(getClassifyList(homeActionType.GET_TOUR_LIST, data.discountList))
    };
  },
  //热门演出
  getHotsRecommendList() {
    return async (dispatch) => {
      const data = await axios.get(
        "home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2"
      );
      // console.log(data)
      dispatch(getClassifyList(homeActionType.GET_HOTS_RECOMMENDLIST, data.hots_show_list))
    };
  },
  //巡回演出
  getTourList() {
    return async (dispatch) => {
      const data = await axios.get(
        "show/tour/getList?version=6.1.1&referer=2"
      );
      // console.log(data)
      dispatch(getClassifyList(homeActionType.GET_TOUR_SHOWLIST, data.list))
    };
  },
  //瀑布流
  getShowListWaterPall() {
    return async (dispatch) => {
      const data = await axios.get(
        `Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${this.props.pageIndex}&referer_type=index&version=6.1.1&referer=2`
      );
      this.switch = false;
      dispatch(getClassifyList(homeActionType.GET_SHOW_LIST, data.list))
      // console.log(data.list)
      let waterfallLeft = []; //左边瀑布流盒子
      let waterfallRight = []; //右边瀑布流盒子
      this.props.waterFallList.forEach((v, i) => {
        if (i % 2 === 0) {
          console.log(i)
          waterfallLeft.push(v)
        } else {
          waterfallRight.push(v)
        }
      })
      this.setState({
        waterfallLeft,
        waterfallRight
      }, () => {
        this.switch = true;
      })
      console.log(waterfallLeft, 11111, waterfallRight)
      //当pageIndex为1时增加滚动条事件
      //组件销毁时 去除
    };
  }
};
