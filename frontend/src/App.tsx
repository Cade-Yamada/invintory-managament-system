import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface BackendStatus {
  status: string;
  timestamp: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [backendStatus, setBackendStatus] = useState<BackendStatus | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data))
      .catch(err => console.error('Error fetching backend status:', err))
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Calgary Comp Calls</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Backend Status: {backendStatus ? `${backendStatus.status} (at ${new Date(backendStatus.timestamp).toLocaleTimeString()})` : 'Connecting...'}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
