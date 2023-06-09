import React from 'react'
import snowpackLogo from './assets/logo.svg'
import reactLogo from '@assets/react.svg'
import { useState } from 'react'
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://www.snowpack.dev" target="_blank">
                    <img src={snowpackLogo} className="logo" alt="Snowpack logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Snowpack + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR updates.
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Snowpack and React logos to learn more
            </p>
        </>
    )
}

export default App