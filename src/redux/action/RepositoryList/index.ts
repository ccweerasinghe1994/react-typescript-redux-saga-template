interface SearchRepositoryAction {
    type: 'search_repositories'
}

interface SearchRepositorySuccessAction {
    type: 'search_repositories_success'
    payload: string[]
}

interface SearchRepositoryFailureAction {
    type: 'search_repositories_failure'
    payload: string
}


export type RepositoryListAction =
    SearchRepositoryAction
    | SearchRepositoryFailureAction
    | SearchRepositorySuccessAction;