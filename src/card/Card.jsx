import React from 'react';
import './Card.css';
import png1 from '../assets/download 1.png';

const Card = ({ title, description, rating, badge ,stars , badgeimg , description2 , number,includeBadgeDiv,extraContent}) => {
    return (
        <div className="card">
        <div className="number-circle">{number}</div>
        <div className='card-left'>
        {includeBadgeDiv && (
            <div className='badge-div'>
              <img src={badgeimg} alt="Badge Image" className='badge-img'></img>
              {badge && <span className="badge">{badge}</span>}
            </div>
          )}
            
            <img src={png1} className='png1'></img>
         
            <h4>Builder 1</h4>
         
            </div>
            <div className='card-middle'>
           <p><b>{title}</b>- {description}</p>
           <b> <h3 style={{color:'#2C384A' , fontWeight:'700px'}}>Main highlights</h3></b>
           {extraContent ? (
            <div>{extraContent}</div>
          ) : (
            <p>{description2}</p>
          )}
            <h4>Show more</h4>
            </div>
            <div className='card-right'>
            <div className='card-box'>
            
               <h1> {rating} </h1>
               <p>Exceptional</p>
               <span role="img" aria-label="star">{stars}</span>
            </div>
            <button className='button'>View</button>
            </div>
        </div>
    );
};

export default Card;
