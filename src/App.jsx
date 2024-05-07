import React, { useState, } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero (Background)/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

const App = () => 
{
  const [transition, setTransition] = useState(false);

  return (
    <div>
    <Navbar setTransition={setTransition} />
     <Hero />
     <Skills />
     <Projects transition={transition} setTransition={setTransition} />
    </div>
  )
}

export default App
