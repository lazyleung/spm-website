import { useState } from 'react'
import spmLogo from '/spm-compass.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src={spmLogo} className="logo" alt="SPM logo" />
        <button onClick={() => setCount((count) => count + 1)}>
          Client Login
        </button>
      </header>
      <main>

      </main>
      <div className="Tagline">
        <p>
          Sic Parvis Magna
        </p>
        <p>
          Greatness from small beginnings
        </p>
        <p>
          - Sir Francis Drake
        </p>
      </div>
      <div className="card">
        <p className="Desc">
            Asia Esports Investment Specialist
        </p>
        
      </div>
    </>
  )
}

export default App
