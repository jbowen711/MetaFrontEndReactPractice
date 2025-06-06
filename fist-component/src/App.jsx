import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading.jsx'


function App() {

  return (
    <div className="App">
    <Heading firstName="Alice"/>
    <Heading firstName="everyone else"/>
    </div>
  )
}

export default App
