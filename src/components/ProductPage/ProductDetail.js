import React, { useState } from 'react';
import { connect } from 'react-redux';
import RatingMeter from '../RatingMeter';
import { addProductToCart, removeProductFromCart } from '../../actions';
import './ProductDetail.scss';
import commentsIcon from '../../assets/comment.png';

const ProductDetail = (props) => {
  const [seeMoreStatus, setSeeMoreStatus] = useState(false);

  const getProductDescription = () => {
    const length = props.activeProduct.description.length;

    if (seeMoreStatus) {
      return props.activeProduct.description;
    }

    return `${props.activeProduct.description.slice(0, length / 3)}...`;
  };

  return (
    <div className="product-detail is-display-flex is-align-items-center is-justify-content-center">
      <img
        className="product-img"
        src={props.activeProduct.img}
        alt="Product icon"
      />
      <div className="description">
        <h1 className="has-text-weight-normal">{props.activeProduct.name}</h1>
        <div className="is-display-flex is-align-items-center">
          <RatingMeter rating={props.activeProduct.rate} width="20px" />
          <div className="comments">
            <span>{props.activeProduct.comments.length}</span>
            <img className="icon" src={commentsIcon} alt="Comments icon" />
          </div>
        </div>
        <div className="is-display-flex is-align-items-center">
          <h2 className="has-text-weight-normal">
            ${props.activeProduct.price}
          </h2>
          <div
            className={
              props.activeProduct.basics ? 'type has-text-centered' : ''
            }
          >
            {props.activeProduct.basics ? 'BASICS' : ''}
          </div>
        </div>
        <p>{getProductDescription()}</p>
        <p
          className="see-more is-clickable is-unselectable"
          onClick={() => setSeeMoreStatus(true)}
        >
          {seeMoreStatus ? '' : 'See more.'}
        </p>
        <button
          className={`is-button ${
            props.productInCart ? 'is-red' : 'is-green'
          }`}
          onClick={() => {
            if (props.productInCart) {
              props.removeProductFromCart(props.activeProduct.id);
            } else {
              props.addProductToCart(props.activeProduct);
            }
          }}
        >
          {props.productInCart ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeProduct: state.activeProductDetail,
    productInCart: state.cart.find(
      (cartProduct) => state.activeProductDetail.id === cartProduct.id
    ),
  };
};

export default connect(mapStateToProps, {
  addProductToCart,
  removeProductFromCart,
})(ProductDetail);
