import searchType from "../../actionType/search";
import searchInit from "../../state/search";
export default function (state = searchInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case searchType.HOTS_SEARCH:
            state.searchInit = payload; break;
        case searchType.SEARCH_DATA:
            state.searchData = payload; break;
    }
    return state
}