import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions';
import './ProductCard.scss';
import commentsIcon from '../assets/comment.png';
import RatingMeter from './RatingMeter';

const ProductCard = ({ product, selectProduct }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="card">
      <div
        className={product.basics ? 'type is-green has-text-centered' : 'type'}
      >
        {product.basics ? 'BASICS' : ''}
      </div>
      <img className="product-img" src={product.img} alt="Product icon" />
      <div className="description has-text-left">
        <p className="title">{product.name}</p>
        <div className="info">
          <div className="rating">
            <RatingMeter rating={product.rate} />
          </div>
          <div className="comments">
            <span className="comments-number">{product.comments}</span>
            <img className="icon" alt="Comments icon" src={commentsIcon} />
          </div>
        </div>
        <p className="price has-text-weight-semibold">${product.price}</p>
      </div>
      <div>
        <button className="is-blue is-button">See details</button>
        <button
          className="is-green is-button"
          onClick={() => selectProduct(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.find(
      (product) => product.id === ownProps.productId
    ),
  };
};

export default connect(mapStateToProps, { selectProduct })(ProductCard);
