import homeActionType from "../../actionType/home";
import homeInit from "../../state/home";
export default function (state = homeInit, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));
  switch (type) {
    case homeActionType.GET_HOTS_RECOMMENDLIST:
      state.hotsRecommendList = payload; break;
    case homeActionType.GET_CLASSIFY_HOME:
      state.classifyList = payload; break;
    case homeActionType.GET_TOUR_LIST:
      state.vipCount = payload; break;
    // default:
    //   state; break;
  }
  // if (type === homeActionType.GET_HOTS_RECOMMENDLIST) {
  //   state.hotsRecommendList = payload;
  // }
  // if (type === homeActionType.GET_CLASSIFY_HOME) {
  //   state.classifyList = payload;
  // }
  // if (type === homeActionType.GET_TOUR_LIST) {
  //   state.vipCount = payload;
  //   console.log("state.vipCount", state.vipCount)
  // }
  return state;
}
