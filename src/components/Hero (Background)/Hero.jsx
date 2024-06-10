import React from 'react';
import './Hero.css';

const Hero = () => {

  return (
    <div className='hero container-fluid' id='hero'> 
      <div className='row justify-content-center align-items-center'> 
        <div className='col-md-8'> 
          <div className='hero-text'>
            <h1 className='typewriter'>Hi, I'm Kenath.</h1>
            <p className="lead">I'm a FrontEnd Developer in Stockholm, Sweden. My journey in coding and design has evolved my passion to become a developer. Feel free to check out my projects and skills here!</p> {/* Added lead class for larger font */}
            <button className='btn btn-primary'>Contact</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;