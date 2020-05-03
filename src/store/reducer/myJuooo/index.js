

import myjuoooType from "../../actionType/myJuooo";
import myjuoooInit from "../../state/myJuooo";

export default function myjuooo(states = myjuoooInit, { type, payload }) {
  const state = JSON.parse(JSON.stringify(states));
  //   console.log("reducer", payload);
  //积分商城列表
  if (type === myjuoooType.GET_SCHEDULAR_LIST) {
    state.userScore = payload;
  }
  //用户积分
  if (type === myjuoooType.GET_USER_SCORE) {
    state.userScore = payload;
  }
  if (type === myjuoooType.GET_MENUITEM_LIST) {
    state.menuItemList = payload;
  }
  //用户信息
  if (type === myjuoooType.GET_BASIC_INFO) {
    state.basicInfo = payload.basic_info;
    state.is_login = payload.is_login;
  }
  //优惠券
  if (type === myjuoooType.GET_COUPON_LIST) {
    state.couponList = payload;
  }
  //余额
  if (type === myjuoooType.GET_BANLANCELIST) {
    state.banlanceList = payload;
  }
  //Plus 会员
  if (type === myjuoooType.GET_PLUS_INFO) {
    state.plusInfo = payload.buy_item;
  }
  if (type === myjuoooType.GET_EQUITY_LIST) {
    state.equityList = payload;
  }
  return state;
}
