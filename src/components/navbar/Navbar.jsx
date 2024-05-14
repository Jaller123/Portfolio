import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

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
            <li><Link to='hero' smooth={true} offset={0} duration={50}>HOME</Link></li>
          <li><Link to='skills' smooth={true} offset={0} duration={50}>SKILLS</Link></li>
            <li><Link to='projects' smooth={true} offset={0} duration={50}>PROJECTS</Link></li>
            <li><Link to='Contact' smooth={true} offset={0} duration={50}>CONTACT</Link></li> 
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
