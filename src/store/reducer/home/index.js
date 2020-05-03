import homeActionType from "../../actionType/home";
import homeInit from "../../state/home";
export default function (state = homeInit, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));
  switch (type) {
    case homeActionType.GET_HOME_LB_LIST: //首页轮播图
      state.homeLbList = payload;
      break;
    case homeActionType.GET_CLASSIFY_HOME: //首页类型
      state.classifyList = payload;
      break;
    case homeActionType.GET_TOUR_LIST: //vip
      state.vipCount = payload;
      break;
    case homeActionType.GET_HOTS_RECOMMENDLIST: //热门演出
      state.hotsRecommendList = payload;
      break;
    case homeActionType.GET_TOUR_SHOWLIST: //巡回演出
      state.tourShowList = payload;
      break;
    case homeActionType.GET_SHOW_LIST: //瀑布流
      if (state.pageIndex < 2) {
        state.waterFallList = payload;
      } else {
        state.waterFallList = [...state.waterFallList, ...payload];
      }
      state.pageIndex++;
      break;
  }
  return state;
}
