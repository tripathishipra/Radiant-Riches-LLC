
import React from 'react'
import Subcard2 from './Subcard2'
import'./Card2.css'

const Card2 = () => {
  return (
    <div className='card2-outer-div'>
    <h1>Related deals you might like for</h1>
    <div className='card2-inner-div'>
    
     <Subcard2 />
     <Subcard2 />
     <Subcard2 />
     </div>
     <div className='signup-div'>
     <h1>Sign up and get exclusive <br></br>special deals</h1>
     <button className='signup-but'>Sign Up</button>
     </div>
    </div>
  )
}

export default Card2
