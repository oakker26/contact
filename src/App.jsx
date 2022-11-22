import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './componenets/Dashboard'
import Gurd from './componenets/Gurd'
import Home from './componenets/Home'
import Login from './componenets/Login'
import Register from './componenets/Register'

function App() {

  return (
    <div className=' container'>
      <Home/>
      <Routes>
        
      <Route  path='/' element={<Home/>} />

      <Route  path='/Login' element={<Login/>} />
      
      <Route  path='/Register' element={<Register/>} />
      
      <Route  path='/Dashboard' element={<Gurd><Dashboard/></Gurd>} />

      </Routes>

    </div>
  )
}

export default App
