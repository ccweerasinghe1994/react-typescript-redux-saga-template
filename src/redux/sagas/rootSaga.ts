import {all, call} from "redux-saga/effects";
import {repositoryListSaga} from "./RepositoryList/index";

export default function* rootSaga() {
    yield all([call(repositoryListSaga)]);
}
