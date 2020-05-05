import axios from "axios";
import libraryActionType from "../../actionType/library";
const librartType = (type, payload) => {
  return {
    type,
    payload,
  };
};

export default {
  // 导航
  getLibraryNav() {
    return async (dispatch) => {
      const data = await axios.get(
        "Show/Index/getShowCategoryList?version=6.1.1&referer=2"
      );
      //   console.log(data);
      dispatch(librartType(libraryActionType.GET_LIBRARY_NAV, data));
    };
  },
  //
  // 地图
  getLibraryMap() {
    return async (dispatch) => {
      const { city_list } = await axios.get(
        "city/city/getCityList?version=6.1.1&referer=2"
      );
      // console.log(city_list);
      dispatch(librartType(libraryActionType.GET_LIBRARY_MAP, city_list));
    };
  },
  //   重置页数
  defaultPageIndex() {
    return (dispatch) => {
      //   console.log(this.pageIndex);
      dispatch(
        librartType(libraryActionType.GET_PAGEINDEX, {
          pageIndex: this.pageIndex,
        })
      );
    };
  },
  //  瀑布流
  getShowListWaterPall() {
    // console.log(this.category);
    return async (dispatch) => {
      const data = await axios.get(
        `Show/Search/getShowList?city_id=${
          JSON.parse(localStorage.getItem("CITY_INFO")).cityId
        }&category=${this.category}&keywords=&venue_id=&start_time=&page=${
          this.props.pageIndex
        }&referer_type=index&version=6.1.1&referer=2`
      );
      dispatch(librartType(libraryActionType.GET_LIBRARYINIT, data.list));
      //   console.log(data.list, this.city, this.category);
      let libraryLeft = []; //左边瀑布流盒子
      let libraryRight = []; //右边瀑布流盒子
      this.props.libraryInit.forEach((v, i) => {
        if (i % 2 === 0) {
          libraryLeft.push(v);
        } else {
          libraryRight.push(v);
        }
      });
      this.setState(
        {
          libraryLeft,
          libraryRight,
        },
        () => {
          this.switch = true;
        }
      );
    };
  },
};
