import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import MainPage from './MainPage';
import ProductPage from './ProductPage';
import PaymentPage from './PaymentPage';
import Cart from './Cart';
import history from '../history';

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Route path="/" component={Navbar} />
        <Route path="/" exact component={MainPage} />
        <Route path="/product/:productId" exact component={ProductPage} />
        <Route path="/payment" exact component={PaymentPage} />
        <Route path="/" component={Cart} />
      </Router>
    </React.Fragment>
  );
};

export default App;
