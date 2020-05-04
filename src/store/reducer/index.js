import { combineReducers } from "redux";
import calender from "./calender";
import detail from "./detail";
import home from "./home";
import library from "./library";
import myjuooo from "./myJuooo";
import search from "./search";
export default combineReducers({
  myjuooo,
  home,
  search,
  detail,
  library,
  calender,
});
