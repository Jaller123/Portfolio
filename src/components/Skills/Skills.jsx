import React from 'react';
import './Skills.css';
import videoBackground from '../../assets/skillsbg.mp4';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      {/* Video Background */}
      <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Layer */}
      <div className="skills-content">
        <h1>These are the skills I have:</h1>
        <div className="row">
          <div className="col-sm-5">
            <div className="skill1">React</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">JS</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">API</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">Figma</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="skill1">Node.js</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">C#</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">GitHub</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">HTML/CSS</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">MongoDB</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">MySQL</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">Storybook</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">Unity</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">Git</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">Docker</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">WireMock</div>
          </div>
          <div className="col-sm-5">
            <div className="skill1">Cypress/Testing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
