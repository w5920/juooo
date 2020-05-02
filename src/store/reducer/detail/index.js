import detailType from "../../actionType/detail";
import detailtInit from "../../state/detail";
export default function (state = detailtInit, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));
  switch (type) {
    case detailType.DETAILE_DEFAULT: //演出详情
      state.detailData = [];
      state.detailData.push(payload);
      break;
    case detailType.DETAILE_RELEVANT: //演出相关
      state.detailRelevant = payload;
      break;
    case detailType.DETAILE_TIME: //订座日期
      state.detailTime = payload;
      break;
  }
  return state;
}
