import myjuoooType from '../../../actionType/myJuooo'
import axios from 'axios'
export function changeBanlanceList(payload) {
    return {
        type: myjuoooType.GET_BANLANCELIST,
        payload
    }
}

export default {
    getBanlanceList(type = 1, page = 1) {
        let form = new FormData();
        form.append("type", type);
        form.append("page", page);
        return async (dispatch) => {
            const data = await axios.post('/user/account/getUserAccountLogList?version=6.1.1&referer=2', form);
            dispatch(changeBanlanceList(data));
            console.log(data);
        }
    }
}