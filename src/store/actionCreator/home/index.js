import axios from "axios";
import homeActionType from "../../actionType/home";
export function getHomeDate(payload) {
  return {
    type: homeActionType.GET_HOTS_RECOMMENDLIST,
    payload,
  };
}
const getClassifyList = payload => {
  return {
    type: homeActionType.GET_CLASSIFY_HOME,
    payload,
  };
}
const getVipCount = payload => {
  return {
    type: homeActionType.GET_TOUR_LIST,
    payload,
  };
}
export default {
  // 获取推荐轮播图
  gethotRecommendList() {
    console.log(this, "gethotRecommendList");
    return async (dispatch) => {
      const { data } = await axios.get(
        "home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2"
      );
      dispatch(getClassifyList(data.classify_list));
    };
  },
  getVipHomeSchedular() {
    return async (dispatch) => {
      const { data } = await axios.get(
        "vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2"
      );
      // console.log(data.discountList)
      dispatch(getVipCount(data.discountList))
    };
  }
};
