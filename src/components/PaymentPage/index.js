import React from 'react';
import Form from './Form';
import CartInfo from './CartInfo';
import './FormPage.scss';

const PaymentPage = () => {
  return (
    <div>
      <div className="container is-display-flex">
        <Form />
        <CartInfo />
      </div>
    </div>
  );
};

export default PaymentPage;
