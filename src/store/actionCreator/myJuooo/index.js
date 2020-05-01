import myjuoooType from '../../actionType/myJuooo'

import axios from 'axios'

export default {
    //获取我的余额
    getBanlanceList(type = 1, page = 1) {
        let form = new FormData();
        form.append("type", type);
        form.append("page", page);
        return async (dispatch) => {
            const data = await axios.post('/user/account/getUserAccountLogList?version=6.1.1&referer=2', form);
            if (!data.list) {
                dispatch({ type: myjuoooType.GET_BANLANCE_LIST, payload: [] });
            } else {
                dispatch({ type: myjuoooType.GET_BANLANCE_LIST, payload: data.list });
            }
        }
    },
    //获取用户信息
    getBasicInfo() {
        return async (dispatch) => {
            const data = await axios.get('/user/account/basicInfo?version=6.1.1&referer=2');
            dispatch({ type: myjuoooType.GET_BASIC_INFO, payload: data });
        }
    },
    getMenuItemList() {
        return async (dispatch) => {
            const data = await axios.get('/user/account/getMenuItem?version=6.1.1&referer=2');
            dispatch({ type: myjuoooType.GET_MENUITEM_LIST, payload: data });
        }
    },
    //获取用户积分
    getUserScore() {
        return async (dispatch) => {
            const data = await axios.get('/scores/scores/getUserScores?version=6.1.1&referer=2');
            dispatch({ type: myjuoooType.GET_MENUITEM_LIST, payload: data });
        }
    },
    getSchedularList() {
        return async (dispatch) => {
            const data = await axios.get('/scores/scores/getScoreSchedularList?city=0&type=0&position=2&version=6.1.1&referer=2')
            dispatch({ type: myjuoooType.GET_SCHEDULAR_LIST, payload: data });
        }
    },
    //优惠券
    getCouponList(type = 1, page = 1) {
        return async (dispatch) => {
            const data = await axios.get('/Coupon/coupon/getUserCouponList?page=' + page + '&type=' + type + '&version=6.1.1&referer=2');
            if (!data.list) {
                dispatch({ type: myjuoooType.GET_COUPON_LIST, payload: [] });
            } else {
                dispatch({ type: myjuoooType.GET_COUPON_LIST, payload: data.list })
            }
        }
    },
    //Plus会员
    getPlusInfo() {
        return async (dispatch) => {
            const data = await axios.get('/Card/Product/info?version=6.1.1&referer=2');
            dispatch({ type: myjuoooType.GET_PLUS_INFO, payload: data.basic_info })
        }
    },
    getEquieyList() {
        return async (dispatch) => {
            const data = await axios.get('/vip/index/getVipRule?vip_rule_id=1&type=0&version=6.1.1&referer=2');
            dispatch({ type: myjuoooType.GET_EQUITY_LIST, payload: data.vip_rule_data.equity_list })
        }
    }
}