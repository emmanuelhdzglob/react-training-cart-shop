import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import './ProductList.scss';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    return this.props.products.map((product) => {
      return <ProductCard productId={product.id} key={product.id} />;
    });
  }

  render() {
    return (
      <div className="product-grid">
        <h1>Our products:</h1>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
