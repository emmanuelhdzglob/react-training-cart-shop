import React from 'react';
import ProductDetail from './ProductDetail';
import CommentsSection from './CommentsSection';

const ProductPage = (props) => {
  return (
    <section>
      <ProductDetail />
      <CommentsSection />
    </section>
  );
};

export default ProductPage;
