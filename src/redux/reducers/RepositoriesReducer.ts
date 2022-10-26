import {RepositoryListActionType} from "../action-types";
import {RepositoryListAction} from "../action";

interface RepositoryState {
    loading: boolean,
    data: string[],
    error: string | null
}

const initialState: RepositoryState = {
    data: [],
    error: null,
    loading: false
}
const reducer = (state: RepositoryState = initialState,
                 action: RepositoryListAction): RepositoryState => {
    switch (action.type) {
        case RepositoryListActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []}
        case RepositoryListActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload}
        case RepositoryListActionType.SEARCH_REPOSITORIES_FAILURE:
            return {loading: false, error: action.payload, data: []}
        default:
            return {...state}
    }
}
export default reducer;