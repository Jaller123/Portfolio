import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => 
{
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/> 
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li><button className='btn'>CONTACT</button></li> 
        </ul>
    </nav>
  )
}

export default Navbar