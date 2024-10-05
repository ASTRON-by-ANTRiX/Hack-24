import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import GameBoard from './Components/GameBoard/GameBoard'

function App() {

  return (
    <div className='main'>
      <Navbar/>
      <GameBoard/>
    </div>
  )
}

export default App
