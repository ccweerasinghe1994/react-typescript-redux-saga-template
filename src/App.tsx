import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RepositoryList from "./components/RepositoryList";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <RepositoryList/>
        </div>
    )
}

export default App
