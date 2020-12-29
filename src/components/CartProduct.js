import React from 'react';
import './CartProduct.scss';

const CartProduct = () => {
  return (
    <div className="cart-product is-display-flex">
      <div className="icon-container">
        <div className="type is-green has-text-centered">BASIC</div>
        <img src="./coffe.jpg" alt="Product icon" />
      </div>
      <div className="description is-display-flex is-justify-content-space-between is-align-items-center">
        <p>Coffe Maker</p>
        <div className="is-display-flex is-align-items-center">
          <p>$105</p>
          <i className="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
