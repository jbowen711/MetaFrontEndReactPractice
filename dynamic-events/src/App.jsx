import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleEvent = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
  }

  return (
    <>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleEvent} id="button">Guess the number between 1-3</button>
    </>
  )
}

export default App
