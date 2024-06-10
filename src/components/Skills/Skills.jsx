import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className='skills'>
      <h1>These are the skills I have:</h1>
      <div className='row'>
        <div className='col-sm-5'>
          <div className='skill1'>React</div>
        </div>
        <div className='col-sm-5'>
          <div className='skill1'>JS</div>
        </div>
        <div className='col-sm-5'>
          <div className='skill1'>API</div>
        </div>
        <div className='col-sm-5'>
          <div className='skill1'>Figma</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-5'>
          <div className='skill1'>Node.js</div>
        </div>
        <div className='col-sm-5'>
          <div className='skill1'>C#</div>
        </div>
        <div className='col-sm-5'>
          <div className='skill1'>GitHub</div>
        </div>
        <div className='col-sm-5'>
          <div className='skill1'>HTML/CSS</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
