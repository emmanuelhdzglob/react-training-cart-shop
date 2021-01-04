import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

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
