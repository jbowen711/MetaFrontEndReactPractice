import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginButton from './login'
import LogoutButton from './logout'
import Homepage from './homepage'
import './App.css'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const login = () => {
    setLoggedIn(true)
  }
  const logout = () => {
    setLoggedIn(false)
  }


  return (
    <>
    {      loggedIn ? (
      <div>
        <Homepage/>
        <LogoutButton logout={logout}/>
      </div>
    ) : (
      <LoginButton login={login}/>
    )

    }
    </>
  )
}

export default App
