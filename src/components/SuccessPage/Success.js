import React from 'react';
import successIcon from '../../assets/success1.webp';
import './Success.scss';

const Success = () => {
  return (
    <div className="success has-text-centered">
      <img alt="Success icon." src={successIcon} />
      <h1>Congratulations! your order has shipped</h1>
    </div>
  );
};

export default Success;
