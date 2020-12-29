import React from 'react';
import './Cart.scss';
import CartProduct from './CartProduct';

const Cart = () => {
  return (
    <div className="cart-bg">
      <div className="cart">
        <div className="close-btn">
          <span className="bar first-diagonal"></span>
          <span className="bar second-diagonal"></span>
        </div>
        <h2 className="has-text-weight-normal">Cart:</h2>
        <p>
          Subtotal: <span className="has-text-weight-bold">$315</span>
        </p>
        <button className="is-blue is-button">Proceed to payment</button>
        <div>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <p>
          Subtotal: <span className="has-text-weight-bold">$315</span>
        </p>
        <button className="is-blue is-button">Proceed to payment</button>
      </div>
    </div>
  );
};

export default Cart;
