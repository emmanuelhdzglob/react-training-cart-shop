import React from 'react';
import RatingMeter from '../RatingMeter';
import './ProductDetail.scss';
import commentsIcon from '../../assets/comment.png';

const ProductDetail = () => {
  return (
    <div className="product-detail is-display-flex is-align-items-center is-justify-content-center">
      <img className="product-img" src="./coffe.jpg" alt="Product icon" />
      <div className="description">
        <h1 className="has-text-weight-normal">Coffe Maker</h1>
        <div className="is-display-flex is-align-items-center">
          <RatingMeter rating="4.5" width="20px" />
          <div className="comments">
            <span>2</span>
            <img className="icon" src={commentsIcon} alt="Comments icon" />
          </div>
        </div>
        <div className="is-display-flex is-align-items-center">
          <h2 className="has-text-weight-normal">$105</h2>
          <div className="type has-text-centered">BASIC</div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit
          orci, efficitur eu vestibulum sed, lobortis id nisi. Sed tempor
          faucibus neque, at congue sapien pretium a. Cras sed fermentum
          dolor...
        </p>
        <p className="see-more is-clickable is-unselectable">See more.</p>
        <button className="is-button is-green">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
