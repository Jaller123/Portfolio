import React, { useState } from 'react';
import './Contact.css'
import discord from './icons/discord.png'
import linkedin from './icons/linkedin.png'
import mail from './icons/mail.png'
import github from './icons/github.png'


const Contact = () => 
  {
  const [alertVisible, setAlertVisible] = useState(false);

  const copyToClipboard = (text) => 
    {
    navigator.clipboard.writeText(text).then(() => 
      {
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000); 
      }, (err) => {
      console.error('Failed to copy text: ', err);
    });

  };
  return (
    <div id="contact">
        <h1>Contact:</h1>
        <div className='icons-container'>
          <img src={discord} alt="" className='contacticon'  onClick={() => copyToClipboard('jaller1234')}/>
          <a href="https://www.linkedin.com/in/kenath-liyanage-29013921b/" target="_blank"><img src={linkedin} alt="LinkedIn" className='contacticon'/></a>
          <a href="mailto:jallerken@hotmail.se" target="_blank"><img src={mail} alt="Mail" className='contacticon'/></a>
          <a href="https://github.com/Jaller123" target="_blank"><img src={github} alt="GitHub" className='contacticon'/></a>
        </div>
            {alertVisible && (
        <div className="alert alert-success" role="alert">
          Username successfully copied to clipboard!
        </div>
      )}
    </div>
  )
}

export default Contact