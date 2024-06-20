import React from 'react'
import Navbar from './components/Menu/Navbar'
import { Route, Routes } from 'react-router-dom'
import SC from './pages/SC/SC'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'

const App = () => {
  return (
    <div className = 'app'>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SC' element={<SC/>}/>
        <Route path='/Order' element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default App
