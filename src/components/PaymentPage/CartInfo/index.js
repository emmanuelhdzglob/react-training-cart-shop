import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import './CartInfo.scss';
import CartProduct from '../../Cart/CartProduct';

const CartInfo = ({ cart, error }) => {
  const renderedCartProducts = cart.map((product) => {
    return <CartProduct productId={product.id} key={product.id} />;
  });

  const totalPrice = cart.reduce(
    (acc, product) => parseFloat(product.price) + acc,
    0
  );

  return (
    <div className="cart-info">
      <h4 className="has-text-weight-normal">Products:</h4>
      <div>{renderedCartProducts}</div>
      <p>
        Subtotal:{' '}
        <span className="price has-text-weight-bold has-text-weight-semibold">
          ${totalPrice}
        </span>
      </p>
      <button className="is-button is-green" form="payment-form" type="submit">
        Pay Now
      </button>
      {error && <p className="error">Some fields are wrong!</p>}
    </div>
  );
};

const wrappedComponent = reduxForm({ form: 'paymentForm' })(CartInfo);

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(wrappedComponent);
