import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import FilterSelector from './components/FilterSelector';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div style={{ overflowY: 'none' }}>
        <Navbar />
        <div>
          <FilterSelector />
          <div style={{ marginLeft: '260px' }}>
            <ProductList />
          </div>

          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
