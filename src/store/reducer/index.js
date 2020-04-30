import { combineReducers } from "redux";
import home from "./home";
import myjuooo from "./myJuooo";
export default combineReducers({

  ...myjuooo,
  home,
});
