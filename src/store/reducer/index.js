import { combineReducers } from "redux";
import home from "./home";
import myjuooo from "./myJuooo";
import search from "./search";
export default combineReducers({
  ...myjuooo,
  home,
  search,
});
