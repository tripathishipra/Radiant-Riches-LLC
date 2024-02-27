import React from 'react'
import './Footer.css'
import png4 from '../assets/Vector (17).png'
const Footer = () => {
  return (
    <div className='footer-div'>
     <div className='footer-heading-1'>
     <h3>Categories</h3>
     <p>Web Builder</p>
     <p>Hosting</p>
     <p>Data Centre</p>
     <p>Robotic-Automation</p>
     </div>
     <div className='footer-heading-2'>
     <h3>Contact</h3>
     <p>Contact</p>
     <p>Privacy Policy</p>
     <p>Terms Of Service</p>
     <p>Categoriesr</p>
    
     </div>
     <div className='United States'>United States 
     <img  src={png4}></img>
     </div>

    </div>
  )
}

export default Footer
