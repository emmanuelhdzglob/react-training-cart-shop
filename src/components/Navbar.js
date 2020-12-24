import React from 'react';
import './Navbar.css';
import logo from '../assets/globant-shops.svg';
import cartImg from '../assets/cart.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="Store logo" />
          </a>
        </li>
        <li>
          <div>
            <img src={cartImg} alt="Cart icon" />
            <span>3</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
