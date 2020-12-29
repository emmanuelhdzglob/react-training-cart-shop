import React from 'react';
import commentsIcon from '../assets/comment.png';
import './ProductCard.scss';
import RatingMeter from './RatingMeter';

const ProductCard = ({ type, imageSrc, title, rating, comments, price }) => {
  return (
    <div className="card">
      <div className={type ? 'type is-green has-text-centered' : 'type'}>
        {type || ' '}
      </div>
      <img className="product-img" src={imageSrc} alt="Product icon" />
      <div className="description has-text-left">
        <p className="title">{title}</p>
        <div className="info">
          <div className="rating">
            <RatingMeter rating={rating} />
          </div>
          <div className="comments">
            <span className="comments-number">{comments}</span>
            <img className="icon" alt="Comments icon" src={commentsIcon} />
          </div>
        </div>
        <p className="price has-text-weight-semibold">${price}</p>
      </div>
      <div>
        <button className="is-blue">See details</button>
        <button className="is-green">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
