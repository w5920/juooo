import axios from "axios";
import searchType from "../../actionType/search";
const defaultFn = (type = searchType.HOTS_SEARCH, payload) => {
    return {
        type,
        payload
    }
}
export default {
    getDefaultSearch() {
        return async (dispatch) => {
            const data = await axios.get("Show/Search/getNewHotWord?version=6.1.1&referer=2")
            // console.log(data)
            dispatch(defaultFn(searchType.HOTS_SEARCH, data))
        }
    },
    //根据关键字搜索
    getSearchDate() {
        // console.log("根据关键字搜索", this, this.searchValue)
        return async (dispatch) => {
            //恢复默认界面
            if (!this.searchValue) {
                dispatch(defaultFn(searchType.SEARCH_DATA, []))
            } else {
                const data = await axios.get(`Show/Search/getShowList?city_id=&category=&keywords=${this.searchValue}&venue_id=&start_time=&page=1&referer_type=&version=6.1.1&referer=2`)
                dispatch(defaultFn(searchType.SEARCH_DATA, data.list))
                // console.log(data.list, this.props.searchData)
            }
            let waterfallLeft = []; //左边瀑布流盒子
            let waterfallRight = []; //右边瀑布流盒子
            this.props.searchData.forEach((v, i) => {
                if (i % 2 === 0) {
                    // console.log(i)
                    waterfallLeft.push(v)
                } else {
                    waterfallRight.push(v)
                }
            })
            this.setState({
                waterfallLeft,
                waterfallRight
            })
        }
    }

}