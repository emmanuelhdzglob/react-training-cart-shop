import React, { useState } from 'react';
import { connect } from 'react-redux';
import RatingMeter from '../RatingMeter';
import './ProductDetail.scss';
import commentsIcon from '../../assets/comment.png';

const ProductDetail = ({ activeProduct }) => {
  const [seeMoreStatus, setSeeMoreStatus] = useState(false);

  return (
    <div className="product-detail is-display-flex is-align-items-center is-justify-content-center">
      <img
        className="product-img"
        src={activeProduct.img}
        alt="Product icon"
      />
      <div className="description">
        <h1 className="has-text-weight-normal">{activeProduct.name}</h1>
        <div className="is-display-flex is-align-items-center">
          <RatingMeter rating={activeProduct.rate} width="20px" />
          <div className="comments">
            <span>{activeProduct.comments.length}</span>
            <img className="icon" src={commentsIcon} alt="Comments icon" />
          </div>
        </div>
        <div className="is-display-flex is-align-items-center">
          <h2 className="has-text-weight-normal">${activeProduct.price}</h2>
          <div className="type has-text-centered">BASIC</div>
        </div>
        <p>
          {seeMoreStatus
            ? activeProduct.description
            : `${activeProduct.description.slice(
                0,
                activeProduct.description.length / 3
              )}...`}
        </p>
        <p
          className="see-more is-clickable is-unselectable"
          onClick={() => setSeeMoreStatus(true)}
        >
          {seeMoreStatus ? '' : 'See more.'}
        </p>
        <button className="is-button is-green">Add to cart</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeProduct: state.activeProductDetail };
};

export default connect(mapStateToProps)(ProductDetail);
