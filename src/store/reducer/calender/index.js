import calenderType from "../../actionType/calender";
import calenderInit from "../../state/calender";
export default function (state = calenderInit, { type, payload }) {
  state = JSON.parse(JSON.stringify(state));
  switch (type) {
    case calenderType.NAV_LIST:
      state.navList = payload;
      break;
    case calenderType.MAP_LIST:
      state.mapList = payload;
      break;
    case calenderType.CALENDER_LIST:
      state.calenderList = payload;
      break;
    case calenderType.SHOW_LIST:
      state.showList = payload;
      break;
  }
  return state;
}
