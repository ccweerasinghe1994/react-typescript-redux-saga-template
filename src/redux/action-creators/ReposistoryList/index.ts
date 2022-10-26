import {RepositoryListActionType} from "../../action-types";

export const searchRepositoriesStart = (term: string) => ({
    type: RepositoryListActionType.SEARCH_REPOSITORIES,
    payload: term
});

export const searchRepositoriesSuccess = (result: string[]) => ({
    type: RepositoryListActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: result
});

export const searchRepositoriesFailure = (error: string | null) => ({
    type: RepositoryListActionType.SEARCH_REPOSITORIES_FAILURE,
    payload: error
});

