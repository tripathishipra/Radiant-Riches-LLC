
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import search from './assets/search-icon.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className='input-div'>
        <img src={search} className="search" alt="Search Icon" />
        <input type="text" className="input" />
      </div>
      <div className="links">
        <Link to="/" className="nav-item px-3">
          Categories
        </Link>
        <Link to="/" className="nav-item px-3">
          Website Builders
        </Link>
        <Link to="/" className="nav-item px-3">
          Today's deals
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
