import myjuoooState from '../../../state/myJuooo'

import myjuoooType from '../../../actionType/myJuooo'

const myPoint = {
    userScore(states = myjuoooState.userSoreInit, { type, payload }) {
        const state = JSON.parse(JSON.stringify(states));
        if (type === myjuoooType.GET_USER_SCORE) {
            state.userScore = payload
        }
        return state
    },
    schedular(states = myjuoooState.schedularInit, { type, payload }) {
        const state = JSON.parse(JSON.stringify(states));
        if (type === myjuoooType.GET_SCHEDULAR_LIST) {
            state.userScore = payload
        }
        return state
    }
}
export default myPoint;