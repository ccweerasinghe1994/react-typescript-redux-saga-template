import {combineReducers} from 'redux';
import repositoriesReducer from "./RepositoriesReducer";

const reducers = combineReducers({
    repositories: repositoriesReducer
})

export default reducers;