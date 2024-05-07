import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () =>
{
  const [transition, setTransition] = useState(false)

  useEffect(() =>
    {
      window.addEventListener('scroll', () => 
        {
          window.scrollY > 500 ? setTransition(true) : setTransition(false);
      }) /*The ternary operator makes sure if the transition value is true
          then it is executed when you scroll halfway down the page*/
    },[]
  );

    
  return (
    <>

  <nav className={`container ${transition ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/> 
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li><button className='btn'>CONTACT</button></li> 
        </ul>
    </nav>
    </>
  )
}

export default Navbar