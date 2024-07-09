import { useState } from 'react'
import spmLogo from '/spm-compass.svg'
import './App.css'

function App() {
  const latinMoto = 'Sic Pravis Magna';
  const engMoto = 'Greatness from small beginnings';
  const [mottoText, setText] = useState(latinMoto);

  return (
    <>
      <main>
        <div className='hero'>
          <div className='header'>
            <div className='logo'>
              <img src={spmLogo} className='logoIcon' alt='SPM logo' />
              {/* <h1 className='logoText'>
                SPM Capital
              </h1> */}
            </div>
            <button onClick={() => console.log('click')}>
              Client Login
            </button>
          </div>
          <div className='herotext'>
            <h1
              onMouseEnter={() => setText(engMoto)}
              onMouseLeave={() => setText(latinMoto)}>
              {mottoText}
            </h1>
            <h2>
              Sir Francis Drake
            </h2>
            <h2>
              
            </h2>
          </div>
        </div>
        <div className='info'>
          <h1>Who We Are</h1>
          <p>
            SPM Capital is a team of Esports, Finance, and Tech veterans specializing in building and scaling early stage Esports, Web3, and gaming companies in Hong Kong, Greater Bay Area, and Southeast Asia.
          </p>
          <h1>Contact Us</h1>
          <p>
            info@spm.vc
          </p>
        </div>
      </main>
    </>
  )
}

export default App
