import React from 'react';
import './Cardprops4.css';
const Cardprops4 = () => {
  return (
    <div >
    <div className='main-point'>
    <div className='point'>
      <div className='small-container'>
        <div className='inner-div'>9.9</div>
        <p>Building Responsive</p>
      </div>
      
      <div className='small-container'>
        <div className='inner-div'>8.9</div>
        <p>Cool</p>
      </div>
      <div className='small-container'>
      <div className='inner-div'>8.9</div>
      <p>Docs</p>
    </div>
    </div>
  </div>
  <h2 className='heading'>Why we love it</h2>
  <div className='point'>
  <div className='small-container'>
        <div className='circle'><div className='tick'>✔</div></div>
        <p>Documentation</p>
      </div>
      <div className='small-container'>
        <div className='circle'><div className='tick'>✔</div></div>
        <p>Easy Use</p>
      </div>
      <div className='small-container'>
        <div className='circle'><div className='tick'>✔</div></div>
        <p>Out of box</p>
      </div>
  </div>
  </div>
  );
}

export default Cardprops4;
