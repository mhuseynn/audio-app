import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/Login/Login'
import RegisterPage from './components/Register/RegisterPage'
import Navbar from './components/Navbar/Navbar.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage/>} /> 
        <Route path="/register" element={<RegisterPage />} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
