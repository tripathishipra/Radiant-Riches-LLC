import React from 'react';
import png from '../assets/download 1.png';
import './Subcard2.css';
const Subcard2 = () => {
  return (
    <div className='card2-container'>
     
      <div className='card2'>
        <img src={png} alt="Related deal" />
        <div className='label-div'>
        <div className='label'>20% Off</div>
        <div className='label2'>Limited time </div>
        </div>
        <h3>Webbuilder 1</h3>
        <p>Computer  Modern clasic with wix support</p>
        <div className='label2-div'>
        <h4>$39.96</h4>
        <h2>$49.96</h2>
        <h3>(20% Off)</h3>
        </div>
        <button className='button-div'>View Deal</button>
        </div>
    </div>
  );
};

export default Subcard2;

