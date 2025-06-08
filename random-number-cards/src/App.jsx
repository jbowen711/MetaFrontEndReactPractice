import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const randomNumber = () => Math.floor(Math.random() * 100) + 1

  return (
    <>
      <h1>Task: Add three Card elements</h1>
      <Card num={randomNumber()} />
      <Card num={randomNumber()} />
      <Card num={randomNumber()} />
      
    </>
  )

} 


export default App
