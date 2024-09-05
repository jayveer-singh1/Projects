import { useState } from 'react'
import './CSS/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Resume from './Resume'
import Project from './Project'
import Contact from './Contact'
import ErrorPage from './Pages/ErrorPage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path='Resume' element={<Resume />} />
          <Route path='Project' element={<Project />} />
          <Route path='Contact' element={<Contact/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
