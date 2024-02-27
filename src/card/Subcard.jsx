import React from 'react';
import Card from './Card';
import cardImage from '../assets/Vector (18).png'
import Cardprops4 from './Cardprops4';

const Subcard = () => {
    const cardProps = {
        title: "WixPro 72-Inch Responsive Website Builder",
        description:  "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        rating: 9.8,
        badge: "Best Choice",
        stars : '⭐⭐⭐⭐⭐',
        number:'1',
        includeBadgeDiv: true,
        badgeimg: cardImage,
        description2: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.' // Pass the imported image as a prop
    };



    const cardProps1 ={
        title: "SiteCraft 68-Inch Ultimate Web Design Studio",
        description:  "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        rating: 9.5,
        number:'2',
        badge: "Best Value",
        stars : '⭐⭐⭐⭐',
        includeBadgeDiv: true,
        badgeimg: cardImage,
        description2:"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."        // Pass the imported image as a prop
    };


    const cardProps3 ={
        title: "WixPro 72-Inch Responsive Website Builder",
        description:  "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        rating: 9.8,
        stars : '⭐⭐⭐⭐⭐',
        number:'3',
        description2: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
    }

   const cardProps4 = {
    title: "WixPro 72-Inch Responsive Website Builder",
        description:  "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        rating: 9.8,
        stars : '⭐⭐⭐⭐⭐',
        number:'4',
        extraContent: (
            <div >
              <Cardprops4 />
            </div>
          ),
   }

    return (

        <div className="app">
            <Card {...cardProps} />
            <Card {...cardProps1} />
            <Card {...cardProps3} />
            <Card {...cardProps4} />
        </div>
    );
};


export default Subcard;
