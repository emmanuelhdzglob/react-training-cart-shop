import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="product-grid">
      <h1>Our products:</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
