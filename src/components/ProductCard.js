import React from 'react';
import star from '../assets/star-rate.svg';
import starHalf from '../assets/star-rate-half.svg';
import commentsIcon from '../assets/comment.png';
import './ProductCard.scss';

const ProductCard = () => {
  return (
    <div className="card">
      <div className="type has-text-centered">BASIC</div>
      <img className="product-img" src="./coffe.jpg" alt="Product icon" />
      <div className="description has-text-left">
        <p className="title">Coffe Maker</p>
        <div className="info">
          <div className="rating">
            <img alt="Star rate" src={star} />
            <img alt="Star rate" src={star} />
            <img alt="Star rate" src={star} />
            <img alt="Star rate" src={star} />
            <img alt="Star rate half" src={starHalf} />
          </div>
          <div className="comments">
            <span className="comments-number">2</span>
            <img className="icon" alt="Comments icon" src={commentsIcon} />
          </div>
        </div>
        <p className="price has-text-weight-semibold">$105</p>
      </div>
      <div>
        <button className="is-blue">See details</button>
        <button className="is-green">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
