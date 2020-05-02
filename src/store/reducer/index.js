import { combineReducers } from "redux";
import detail from "./detail";
import home from "./home";
import myjuooo from "./myJuooo";
import search from "./search";
export default combineReducers({
  myjuooo,
  home,
  search,
  detail,
});
