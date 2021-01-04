import React from 'react';
import FilterSelector from './FilterSelector';
import ProductList from './ProductList';

const MainPage = () => {
  return (
    <section>
      <FilterSelector />
      <div style={{ marginLeft: '260px' }}>
        <ProductList />
      </div>
    </section>
  );
};

export default MainPage;
