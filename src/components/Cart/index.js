import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeCart } from '../../actions';
import './Cart.scss';
import CartProduct from './CartProduct';

const Cart = ({ cart, cartIsOpened, closeCart, location }) => {
  // If the cart is opened disable overflow Y for body.
  useEffect(() => {
    if (cartIsOpened) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [cartIsOpened]);

  // Closes the cart when is empty.
  useEffect(() => {
    if (!cart.length || location.pathname === '/payment') {
      closeCart();
    }
  }, [cart.length, location.pathname, closeCart]);

  const totalPrice = cart.reduce(
    (acc, product) => parseFloat(product.price) + acc,
    0
  );

  const renderedCartProducts = cart.map((product) => {
    return <CartProduct productId={product.id} key={product.id} />;
  });

  if (!cartIsOpened) {
    return null;
  }

  return (
    <div className="cart-bg">
      <div className="cart">
        <div className="close-btn" onClick={closeCart}>
          <span className="bar first-diagonal"></span>
          <span className="bar second-diagonal"></span>
        </div>
        <h2 className="has-text-weight-normal">Cart:</h2>
        <p>
          Subtotal: <span className="has-text-weight-bold">${totalPrice}</span>
        </p>
        <Link className="is-blue is-button" to="/payment">
          Proceed to payment
        </Link>
        <div>{renderedCartProducts}</div>
        <p>
          Subtotal: <span className="has-text-weight-bold">${totalPrice}</span>
        </p>
        <Link className="is-blue is-button" to="/payment">
          Proceed to payment
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, cartIsOpened: state.cartIsOpened };
};

export default connect(mapStateToProps, { closeCart })(Cart);
