import { useState } from 'react'
import spmLogo from '/spm-compass.svg'
import './App.css'

function App() {
  // const [] = useState(0)

  return (
    <>
      <header>
        <div className='logo'>
          <img src={spmLogo} className="logoIcon" alt="SPM logo" />
          <h1 className='logoText'>
            SPM Capital
          </h1>
        </div>
        
        <button onClick={() => console.log("click")}>
          Client Login
        </button>
      </header>
      <main>
        <div className="hero">
          <h1>
            Sic Parvis Magna
          </h1>
          <h2>
            Greatness from small beginnings
            - Sir Francis Drake
          </h2>
        </div>
        <div className="info">
            <p>
              Asia Esports Investment Specialist
            </p>
            {/* Contact Info */}
        </div>
      </main>
    </>
  )
}

export default App
