import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainPage from './MainPage/MainPage';
import ProductPage from './ProductPage/ProductPage';
import Cart from './Cart/Cart';

const App = () => {
  return (
    <div style={{ overflowY: 'none' }}>
      <Navbar />
      <div>
        {/* <MainPage /> */}
        <ProductPage />
        <Cart />
      </div>
    </div>
  );
};

export default App;
