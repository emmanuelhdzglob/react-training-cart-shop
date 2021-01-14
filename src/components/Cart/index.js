import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeCart } from '../../actions';
import CartProduct from './CartProduct';
import closeIcon from '../../assets/close.png';
import './Cart.scss';

export const Cart = ({ cart, cartIsOpened, closeCart, location }) => {
  const isInPaymentRoute = location.pathname === '/payment';

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
    if (!cart.length || isInPaymentRoute) {
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

  if (!cartIsOpened || !cart.length || isInPaymentRoute) {
    return null;
  }

  return (
    <div className="cart-bg" data-testid="cart-bg">
      <div className="cart" data-testid="cart">
        <button
          className="close-btn"
          onClick={closeCart}
          data-testid="close-btn"
        >
          <img src={closeIcon} alt="Close Button Icon" />
        </button>
        <h2 className="has-text-weight-normal">Cart:</h2>
        <p>
          Subtotal:{' '}
          <span className="has-text-weight-bold" data-testid="price">
            ${totalPrice}
          </span>
        </p>
        <Link
          className="is-blue is-button"
          to="/payment"
          data-testid="payment-link-1"
        >
          Proceed to payment
        </Link>
        <div data-testid="product-container">{renderedCartProducts}</div>
        <p>
          Subtotal: <span className="has-text-weight-bold">${totalPrice}</span>
        </p>
        <Link
          className="is-blue is-button"
          to="/payment"
          data-testid="payment-link-2"
        >
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
