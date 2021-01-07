import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './Form.scss';
import { placeOrder } from '../../actions';

class Form extends Component {
  renderInput({ input, label, width }) {
    const className = `form-field ${
      width === '100%' ? 'is-width-100' : 'is-width-50'
    }`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type="text" />
      </div>
    );
  }

  onSubmit = (formValues) => {
    const formattedValues = {
      shippingData: {
        fullName: `${formValues.name} ${formValues.lastName}`,
        address: formValues.address,
        city: formValues.city,
        state: formValues.state,
        zipCode: formValues.zipCode,
        phoneNumber: formValues.phoneNumber,
      },
      creditCardData: {
        creditCard: formValues.creditCard,
        cvv: formValues.cvv,
        expDate: formValues.expDate,
        fullName: formValues.fullName,
      },
    };

    return this.props.placeOrder(formattedValues);
  };

  render() {
    return (
      <form
        id="payment-form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <h4 className="has-text-weight-normal">Shipping data:</h4>
        <div className="form-section">
          <div className="field-box is-display-flex">
            <Field name="name" label="Name" component={this.renderInput} />
            <Field
              name="lastName"
              label="Last Name"
              component={this.renderInput}
            />
          </div>
          <div className="field-box is-display-flex">
            <Field
              name="address"
              label="Address"
              component={this.renderInput}
            />
            <Field name="city" label="City" component={this.renderInput} />
          </div>
          <div className="field-box is-display-flex">
            <Field name="state" label="State" component={this.renderInput} />
            <Field
              name="zipCode"
              label="Zip Code"
              component={this.renderInput}
            />
          </div>
          <div className="field-box is-display-flex">
            <Field
              name="phoneNumber"
              label="Phonenumber"
              component={this.renderInput}
            />
          </div>
        </div>
        <h4 className="has-text-weight-normal">Credit Cart data:</h4>
        <div className="form-section">
          <div className="field-box is-display-flex">
            <Field
              name="creditCard"
              label="Credit Card Number"
              component={this.renderInput}
            />
          </div>
          <Field
            name="fullName"
            label="Full Name"
            width="100%"
            component={this.renderInput}
          />
          <div className="field-box is-display-flex">
            <Field
              name="expDate"
              label="Exp. Date"
              component={this.renderInput}
            />
            <Field name="cvv" label="CVV" component={this.renderInput} />
          </div>
        </div>
      </form>
    );
  }
}

const wrappedForm = reduxForm({ form: 'paymentForm' })(Form);

export default connect(null, { placeOrder })(wrappedForm);
