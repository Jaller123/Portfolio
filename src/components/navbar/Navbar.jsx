import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');

      if (skillsSection && projectsSection) {
        if (
          scrollPosition >= skillsSection.offsetTop && 
          scrollPosition < projectsSection.offsetTop
        ) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`container ${scrolling ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/> 
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li> 
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
