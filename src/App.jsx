import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './dropdown/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', width: '100%', flexShrink: '0'}}>
        <h1>some nice title</h1>
        <Dropdown>
        {/* trigger / btn */}
        {/* actual dropdown info */}
        </Dropdown>
      </div>
      
    </>
  )
}

export default App
 