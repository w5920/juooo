import myjuoooType from '../../../actionType/myJuooo'
import axios from 'axios'

export function changeBasicInfo(payload) {
    return {
        type: myjuoooType.GET_BASIC_INFO,
        payload
    }
}

export function changeMenuItemList(payload) {
    return {
        type: myjuoooType.GET_MENUITEM_LIST,
        payload
    }
}

export default {
    getBasicInfo() {
        return async (dispatch) => {
            const data = await axios.get('/user/account/basicInfo?version=6.1.1&referer=2');
            dispatch(changeBasicInfo(DataTransferItemList));
        }
    },
    getMenuItemList() {
        return async (dispatch) => {
            const data = await axios.get('/user/account/getMenuItem?version=6.1.1&referer=2');
            dispatch(changeMenuItemList(data));
        }
    }
}