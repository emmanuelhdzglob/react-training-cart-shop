import React from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import './ProductList.scss';

const ProductList = ({ products }) => {
  const renderedProducts = products.map((product) => (
    <ProductCard {...product} key={product.id} />
  ));

  return (
    <div className="product-grid">
      <h1>Our products:</h1>
      {renderedProducts}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps)(ProductList);
