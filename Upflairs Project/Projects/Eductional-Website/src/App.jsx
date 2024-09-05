import React from 'react'
import Navbar from './Componaents/Navbar/Navbar'
import Hero from './Componaents/Hero/Hero'
import Programs from './Componaents/Programs/Programs'
import Title from './Componaents/Title/Title'
import About from './Componaents/About/About'
import Campus from './Componaents/Campus/Campus'
import Testimonials from './Componaents/Testimonials/Testimonials'
import Contact from './Componaents/Contact/Contact'
import Footer from './Componaents/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs />
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact US' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

