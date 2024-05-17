import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navClass, setNavClass] = useState('');

  useEffect(() => {
    const handleScroll = () => 
    {
      const scrollPosition = window.scrollY;
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      if (skillsSection && projectsSection && contactSection) 
      {
        const skillsSectionTop = skillsSection.offsetTop;
        const projectsSectionTop = projectsSection.offsetTop;
        const contactSectionTop = contactSection.offsetTop;

        if (scrollPosition >= contactSectionTop) 
        {
          setNavClass('contact-nav');
        } else if (scrollPosition >= projectsSectionTop) 
          
        {
          setNavClass('projects-nav');
        } else if (scrollPosition >= skillsSectionTop) 

        {
          setNavClass('skills-nav');
        } else 

        {
          setNavClass('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${navClass}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={50}>HOME</Link></li>
        <li><Link to='skills' smooth={true} offset={0} duration={50}>SKILLS</Link></li>
        <li><Link to='projects' smooth={true} offset={0} duration={50}>PROJECTS</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={50}>CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
