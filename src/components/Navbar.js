import React from 'react';
import { connect } from 'react-redux';
import './Navbar.scss';
import logo from '../assets/globant-shops.svg';
import cartImg from '../assets/cart.svg';

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <ul className="is-display-flex is-align-items-center is-justify-content-space-between">
        <li>
          <a href="/">
            <img src={logo} alt="Store logo" />
          </a>
        </li>
        <li>
          <div style={{ cursor: 'pointer' }}>
            <img src={cartImg} alt="Cart icon" />
            <span className="has-text-centered">{cart.length}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
