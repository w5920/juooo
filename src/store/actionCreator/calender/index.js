import axios from "axios";
import calenderType from "../../actionType/calender";
const calenderDefault = (type, payload) => {
  return {
    type,
    payload,
  };
};

export default {
  getNavList() {
    return async (dispatch) => {
      const data = await axios.get(
        "Show/Index/getShowCategoryList?version=6.1.1&referer=2"
      );
      // console.log(data);
      dispatch(calenderDefault(calenderType.NAV_LIST, data));
    };
  },
  getMapList() {
    return async (dispatch) => {
      const { city_list } = await axios.get(
        "city/city/getCityList?version=6.1.1&referer=2"
      );
      dispatch(calenderDefault(calenderType.MAP_LIST, city_list));
      // console.log(city_list);
    };
  },
  getCalenderList() {
    return async (dispatch) => {
      const data = await axios.get(
        "Search/getCalendar?year=2020&month=5&category=0&version=6.1.1&referer=2"
      );
      // console.log(data);
    };
  },
  getShowList() {
    return async (dispatch) => {
      const { list } = await axios.get(
        `Show/Search/getShowList?category=0&city_id=0&start_time=2020%2F5%2F4&version=6.1.1&referer=2`
      );
      // console.log(list);
    };
  },
};
