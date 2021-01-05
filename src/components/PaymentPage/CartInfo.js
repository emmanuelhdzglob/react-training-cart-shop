import React from 'react';
import { connect } from 'react-redux';
import './CartInfo.scss';
import CartProduct from '../Cart/CartProduct';

const CartInfo = ({ cart }) => {
  const renderedCartProducts = cart.map((product) => {
    return <CartProduct productId={product.id} key={product.id} />;
  });

  return (
    <div className="cart-info">
      <h4>Products:</h4>
      <div>{renderedCartProducts}</div>
      <p>
        Subtotal: <span className="has-text-weight-bold">$105</span>
      </p>
      <button className="is-button is-green" form="payment-form" type="submit">
        Pay Now
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(CartInfo);
