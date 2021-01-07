import React, { Component } from 'react';
import { connect } from 'react-redux';
import RatingMeter from '../RatingMeter';
import { addProductToCart, removeProductFromCart } from '../../actions';
import './ProductDetail.scss';
import commentsIcon from '../../assets/comment.png';

class ProductDetail extends Component {
  state = { seeMoreStatus: false };

  getProductDescription = () => {
    const length = this.props.activeProduct.description.length;

    if (this.state.seeMoreStatus) {
      return this.props.activeProduct.description;
    }

    return `${this.props.activeProduct.description.slice(0, length / 3)}...`;
  };

  renderSeeMoreButton() {
    if (!this.state.seeMoreStatus) {
      return (
        <p
          className="see-more is-clickable is-unselectable"
          onClick={() => this.setState({ seeMoreStatus: true })}
        >
          See more.
        </p>
      );
    }

    return null;
  }

  onCartButtonClick = () => {
    if (this.props.productInCart) {
      this.props.removeProductFromCart(this.props.activeProduct.id);
    } else {
      this.props.addProductToCart(this.props.activeProduct);
    }
  };

  render() {
    const {
      img,
      name,
      rate,
      comments,
      price,
      basics,
    } = this.props.activeProduct;

    return (
      <div className="product-detail is-display-flex is-align-items-center is-justify-content-center">
        <img className="product-img" src={img} alt="Product icon" />
        <div className="description">
          <h1 className="has-text-weight-normal">{name}</h1>
          <div className="is-display-flex is-align-items-center">
            <RatingMeter rating={rate} width="20px" />
            <div className="comments">
              <span>{comments.length}</span>
              <img className="icon" src={commentsIcon} alt="Comments icon" />
            </div>
          </div>
          <div className="is-display-flex is-align-items-center">
            <h2 className="has-text-weight-normal">${price}</h2>
            <div className={basics ? 'type has-text-centered' : ''}>
              {basics ? 'BASICS' : ''}
            </div>
          </div>
          <p>{this.getProductDescription()}</p>
          {this.renderSeeMoreButton()}
          <button
            className={`is-button ${
              this.props.productInCart ? 'is-red' : 'is-green'
            }`}
            onClick={this.onCartButtonClick}
          >
            {this.props.productInCart ? 'Remove from cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    );
  }
}

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
