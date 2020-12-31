import React from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../actions';
import './CartProduct.scss';

const CartProduct = ({ product, removeProductFromCart }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="cart-product is-display-flex">
      <div className="icon-container">
        <div
          className={product.type ? 'type is-green has-text-centered' : 'type'}
        >
          {product.type}
        </div>
        <img src={product.imageSrc} alt="Product icon" />
      </div>
      <div className="description is-display-flex is-justify-content-space-between is-align-items-center">
        <p>{product.title}</p>
        <div className="is-display-flex is-align-items-center">
          <p>${product.price}</p>
          <i
            className="far fa-trash-alt"
            onClick={() => removeProductFromCart(product.id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.cart.find((product) => product.id === ownProps.productId),
  };
};

export default connect(mapStateToProps, { removeProductFromCart })(
  CartProduct
);
