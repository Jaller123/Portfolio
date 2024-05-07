import React, { useState, } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero (Background)/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

const App = () => 
{


  return (
    <div>
    <Navbar />
     <Hero />
     <Skills />
     <Projects/>
    </div>
  )
}

export default App
