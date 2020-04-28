
import myjuoooType from '../../../actionType/myJuooo'
import myIndexInit from '../../../state/myJuooo'

export function myIndex(states = myIndexInit, { type, payload }) {
    const state = JSON.parse(JSON.stringify(states));
    if (type === myjuoooType.GET_MENUITEM_LIST) {
        state.menuItemList = payload;
    }
    if (type === myjuoooType.GET_BASIC_INFO) {
        state.basicInfo = payload;
    }
    return state
}
