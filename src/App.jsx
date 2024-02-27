import React from 'react'
import Navbar from './Navbar'
import logo1 from './assets/IMAGE (2).png'
import logo2 from './assets/IMAGE (1).png'
import logo3 from './assets/Vector (17).png'
import './App.css'
import Subcard from './card/Subcard'
import Card2 from './Card2/Card2'
import Footer from './Footer/Footer'



const App = () => {
  return (
    <div className='main-container'>
    <Navbar />
   
        <div className="header">
          <h1>Best Website Builders in the US</h1>
          <hr class="centered-hr"></hr>
          <div className="info">
           
            <div className='div1'>
            
              <img src={logo1}></img><p>Last Updated - February 22, 2020</p>
              </div>
              <div className='div2'>
             
               <img src={logo2}></img><p>Advertising Disclosure</p>
              </div>
            
            <div className="right">
              <p>Top Relevant</p> 
             
            </div>
          </div>
          <hr class="centered-hr"></hr>
          <div className="navigation">
            <p>Tools</p>
            <p>AWS Builder</p>
            <p>Start Build</p>
            <p>Build Supplies</p>
            <p>Tooling</p>
            <p>BlueHosting</p>
          </div>
          <div  className='navigation-bottom'>
      
          <p>Hosting for all  {'>'}  Build Supplies {'>'} Hosting {'>'} Hosting6 {'>'} Hosting5</p>
        
          </div>
          <Subcard />
          <Card2 />
          
        </div>
        <Footer />
      
  
    </div>
  )
}

export default App
