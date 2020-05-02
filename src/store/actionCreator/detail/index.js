import axios from "axios";
import detailType from "../../actionType/detail";
const detailAction = (type, payload) => {
  return {
    type,
    payload,
  };
};

export default {
  //详情列表
  getDetailData() {
    return async (dispatch) => {
      const { item_list, static_data } = await axios.get(
        `Schedule/Schedule/getScheduleInfo?schedular_id=${this.props.match.params.id}&version=6.1.1&referer=2`
      );
      //详情相关  在详情列表的基础上进行查询
      const { list } = await axios.get(
        `Show/Search/getShowList?category=${static_data.cate_parent_id}&city_id=${static_data.city.city_id}&version=6.1.1&referer=2`
      );
      console.log(static_data, list);
      dispatch(detailAction(detailType.DETAILE_DEFAULT, static_data)); //详情数据
      dispatch(detailAction(detailType.DETAILE_RELEVANT, list)); //详情相关
      dispatch(detailAction(detailType.DETAILE_TIME, item_list)); //选座日期
    };
  },
};
