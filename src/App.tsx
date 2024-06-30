import { useState } from 'react'
import spmLogo from '/spm-compass.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='logo'>
          <img src={spmLogo} className="logoIcon" alt="SPM logo" />
          <h1 className='logoText'>
            SPM Capital
          </h1>
        </div>
        
        <button onClick={() => setCount((count) => count + 1)}>
          Client Login
        </button>
      </header>
      <main>
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
        <p className="Desc">
            Asia Esports Investment Specialist
        </p>
      </main>
    </>
  )
}

export default App
