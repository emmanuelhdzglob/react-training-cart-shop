import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openCart } from '../../actions';
import './Navbar.scss';
import logo from '../../assets/globant-shops.svg';
import cartImg from '../../assets/cart.svg';

export const Navbar = ({ cart, openCart, location }) => {
  const renderCart = () => {
    if (location.pathname === '/payment') {
      return null;
    }

    return (
      <button
        className="cart-btn"
        style={{ cursor: 'pointer' }}
        onClick={() => openCart(cart.length)}
        data-testid="cart-btn"
      >
        <img src={cartImg} alt="Cart icon" />
        <span
          className="cart-items has-text-centered"
          data-testid="cart-length"
        >
          {cart.length}
        </span>
      </button>
    );
  };

  return (
    <nav className="navbar" data-testid="navbar">
      <ul className="is-display-flex is-align-items-center is-justify-content-space-between">
        <li>
          <Link to="/">
            <img src={logo} alt="Store logo" data-testid="company-logo" />
          </Link>
        </li>
        <li data-testid="cart-btn-container">{renderCart()}</li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { openCart })(Navbar);
