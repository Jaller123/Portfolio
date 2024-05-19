import React from 'react'
import './Contact.css'
import discord from './icons/discord.png'
import linkedin from './icons/linkedin.png'
import mail from './icons/mail.png'
import github from './icons/github.png'


const Contact = () => {
  return (
    <div id="contact">
        <h1>Contact:</h1>
        <div className='icons-container'>
          <img src={discord} alt="" className='contacticon'/>
          <img src={linkedin} alt="" className='contacticon'/>
          <img src={mail} alt="" className='contacticon'/>
          <img src={github} alt="" className='contacticon'/>
          
        </div>
    </div>
  )
}

export default Contact