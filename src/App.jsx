import React from 'react'
import { Home } from './Components/Home/Home'
import Login  from './Components/Login/Login'
import Singup  from './Components/Signup/Singup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='font-[Jost-Medium]'>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </Router>

    </div>
  )
}

export default App