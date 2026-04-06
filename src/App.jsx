import React, { useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
<Route path='/' element={<Landing/>} />
<Route path='/About' element={<About/>} />
  </Routes>
    </BrowserRouter>
  )
}

export default App
