import React, { useState, } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero (Background)/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { Navbar } from 'react-bootstrap'

const App = () => 
{


  return (
    <div>
     <Navbar />
     <Hero />
     <Skills />
     <Projects/>
     <Contact />
    </div>
  )
}

export default App
