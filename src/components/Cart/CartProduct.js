import React from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../actions';
import './CartProduct.scss';

const CartProduct = ({ product, removeProductFromCart }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="cart-product is-display-flex">
      <div className="icon-container">
        <div
          className={`type has-text-centered ${
            product.basics ? 'is-green' : ''
          }`}
        >
          {product.basics ? 'BASICS' : ''}
        </div>
        <img src={product.img} alt="Product icon" />
      </div>
      <div className="description is-display-flex is-justify-content-space-between is-align-items-center">
        <p>{product.name}</p>
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
