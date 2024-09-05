import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import Blog from './Pages/Blog'
import Login from './Pages/Login'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='Blog' element={<Blog/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
