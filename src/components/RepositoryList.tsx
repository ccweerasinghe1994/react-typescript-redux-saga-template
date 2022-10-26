import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {actionCreators} from '../redux'

const RepositoryList: React.FC = () => {
    const [term, setTerm] = useState<string>('');
    const dispatch = useDispatch();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actionCreators.searchRepositoriesStart(term));
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)} type="text"/>
            <button>search</button>
        </form>
    </div>
}

export default RepositoryList;