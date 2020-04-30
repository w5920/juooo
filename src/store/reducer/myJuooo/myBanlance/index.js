import myjuoooType from '../../../actionType/myJuooo'
import myJuoooState from '../../../state/myJuooo'


export function banlance(states = myJuoooState.banlanceInit, { type, payload }) {
    const state = JSON.parse(JSON.stringify(states));
    if (type === myjuoooType.GET_BANLANCELIST) {
        state.banlanceList = payload
    }
    return state
}



