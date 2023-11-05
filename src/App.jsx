import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './dropdown/Dropdown'

function App() {
  let characters = ['Batman', 'Fidel', 'Naruto']

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', width: '100%', flexShrink: '0'}}>
        <h1>some nice title</h1>
        <Dropdown>
          <Dropdown.Title>Characters</Dropdown.Title>
          <Dropdown.List>
            {characters.map((item, idx) => (
              <Dropdown.Item key={idx}>{item}</Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown>
        <Dropdown>
          <Dropdown.List>
            {characters.map((item, idx) => (
              <Dropdown.Item key={idx}>{item} <button>del</button></Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown>
      </div>
      
    </>
  )
}

export default App
 