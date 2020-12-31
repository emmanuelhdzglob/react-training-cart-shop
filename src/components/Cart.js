import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { closeCart } from '../actions';
import './Cart.scss';
import CartProduct from './CartProduct';

const Cart = ({ cart, cartIsOpened, closeCart }) => {
  useEffect(() => {
    if (cartIsOpened) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [cartIsOpened]);

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
          Subtotal: <span className="has-text-weight-bold">$315</span>
        </p>
        <button className="is-blue is-button">Proceed to payment</button>
        <div>{renderedCartProducts}</div>
        <p>
          Subtotal: <span className="has-text-weight-bold">$315</span>
        </p>
        <button className="is-blue is-button">Proceed to payment</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, cartIsOpened: state.cartIsOpened };
};

export default connect(mapStateToProps, { closeCart })(Cart);
