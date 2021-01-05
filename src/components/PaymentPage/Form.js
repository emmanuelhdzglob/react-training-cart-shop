import React from 'react';
import Field from './FormField';
import './Form.scss';

const Form = () => {
  return (
    <form id="payment-form">
      <h4>Shipping data:</h4>
      <div className="form-section">
        <div className="field-box is-display-flex">
          <Field labelText="Name" name="name" width="50%" />
          <Field labelText="Last Name" name="last-name" width="50%" />
        </div>
        <div className="field-box is-display-flex">
          <Field labelText="Address" name="address" width="50%" />
          <Field labelText="City" name="city" width="50%" />
        </div>
        <div className="field-box is-display-flex">
          <Field labelText="State" name="state" width="50%" />
          <Field labelText="Zip Code" name="zip-code" width="50%" />
        </div>
        <div className="field-box is-display-flex">
          <Field labelText="Phone number" name="phone-number" width="50%" />
        </div>
      </div>
      <h4>Credit Cart data:</h4>
      <div className="form-section">
        <div className="field-box is-display-flex">
          <Field
            labelText="Credit Card Number"
            name="credit-card"
            width="50%"
          />
        </div>
        <Field labelText="Full Name" name="card-name" width="100%" />
        <div className="field-box is-display-flex">
          <Field labelText="Exp. Date" name="exp-date" width="50%" />
          <Field labelText="CVV" name="cvv" width="50%" />
        </div>
      </div>
    </form>
  );
};

export default Form;
