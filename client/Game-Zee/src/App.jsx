// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import GameBoard from './Components/GameBoard/GameBoard';
import Rules from './Components/Rules/Rules';
import About from './Components/AboutUs/AboutUs';  // Make sure this path is correct

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path="/game" element={<GameBoard />} />
          <Route path="/rules" element={<Rules />} /> {/* Route for Rules */}
          <Route path="/about" element={<About />} /> {/* Route for About */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
