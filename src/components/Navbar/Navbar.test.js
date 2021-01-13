import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Navbar } from './index';
import history from '../../history';

const setUp = (props) => {
  return render(
    <Router history={history}>
      <Navbar {...props} />
    </Router>
  );
};

const commonProps = {
  cart: [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
  ],
  openCart: jest.fn(),
};

describe('Navbar component', () => {
  describe('Any route except /payment', () => {
    let navbar;
    let props;
    beforeEach(() => {
      props = {
        ...commonProps,
        location: {
          pathname: '/',
        },
      };

      navbar = setUp(props);
    });

    it('Should render without problems.', () => {
      const htmlNavbar = navbar.getByTestId('navbar');
      expect(htmlNavbar).toBeInTheDocument();
    });

    it('Should render the logo of the company.', () => {
      const logo = navbar.getByTestId('company-logo');
      expect(logo).toBeInTheDocument();
    });

    it('Shows the cart button.', () => {
      const cartBtn = navbar.getByTestId('cart-btn');
      expect(cartBtn).toBeInTheDocument();
    });

    it('Should execute openCart on cart button click.', () => {
      const cartBtn = navbar.getByTestId('cart-btn');

      fireEvent.click(cartBtn);

      expect(props.openCart).toBeCalledTimes(1);
    });

    it('Renders the length of the cart.', () => {
      const lengthSpan = navbar.getByTestId('cart-length');
      expect(parseInt(lengthSpan.innerHTML)).toEqual(2);
    });
  });

  describe('/payment route', () => {
    let navbar;
    let props;
    beforeEach(() => {
      props = {
        commonProps,
        location: {
          pathname: '/payment',
        },
      };

      navbar = setUp(props);
    });

    it('Should render without problems.', () => {
      const htmlNavbar = navbar.getByTestId('navbar');
      expect(htmlNavbar).toBeInTheDocument();
    });

    it('Should render the logo of the company.', () => {
      const logo = navbar.getByTestId('company-logo');
      expect(logo).toBeInTheDocument();
    });

    it('Should NOT render cart button.', () => {
      const btnContainer = navbar.getByTestId('cart-btn-container');
      expect(btnContainer.childElementCount).toBe(0);
    });
  });
});
