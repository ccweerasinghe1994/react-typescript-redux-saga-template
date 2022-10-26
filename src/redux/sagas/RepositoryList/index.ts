import {call, put, takeLatest, all} from "redux-saga/effects";
import {RepositoryListActionType} from "../../action-types";
import {searchRepositoriesFailure, searchRepositoriesSuccess} from "../../action-creators/ReposistoryList";
import axios from "axios";

const getData = (term: string) => {
    return axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
            text: term
        }
    })
}

function* fetchCollectionsAsync({payload}) {
    try {
        const {data} = yield call(getData, payload);
        const names: string[] = yield data.objects.map(result => result.package.name);
        yield put(searchRepositoriesSuccess(names))
    } catch (error) {
        yield put(searchRepositoriesFailure(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        RepositoryListActionType.SEARCH_REPOSITORIES,
        fetchCollectionsAsync
    );
}

export function* repositoryListSaga() {
    yield all([
        call(fetchCollectionStart)
    ]);
}