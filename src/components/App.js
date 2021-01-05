import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import MainPage from './MainPage';
import ProductPage from './ProductPage';
import Cart from './Cart';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={MainPage} />
        <Route path="/product/:productId" component={ProductPage} />
        <Cart />
      </Router>
    </div>
  );
};

export default App;
