import myjuoooType from '../../../actionType/myJuooo'
import axios from 'axios'

export function changeUserScore(payload) {
    return {
        type: myjuoooType.GET_USER_SCORE,
        payload
    }
}
export function changeSchedularList(payload) {
    return {
        type: myjuoooType.GET_SCHEDULAR_LIST,
        payload
    }
}
export default {
    getUserScore() {
        return async (dispatch) => {
            const data = await axios.get('/scores/scores/getUserScores?version=6.1.1&referer=2');
            dispatch(changeUserScore(data));
        }
    },
    getSchedularList() {
        return async (dispatch) => {
            const data = await axios.get('/scores/scores/getScoreSchedularList?city=0&type=0&position=2&version=6.1.1&referer=2')
            dispatch(changeSchedularList(data));
        }
    }
}