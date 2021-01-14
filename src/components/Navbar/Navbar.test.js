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
    let Navbar;
    let props;
    beforeEach(() => {
      props = {
        ...commonProps,
        location: {
          pathname: '/',
        },
      };

      Navbar = setUp(props);
    });

    it('Should render without problems.', () => {
      const htmlNavbar = Navbar.getByTestId('navbar');
      expect(htmlNavbar).toBeInTheDocument();
    });

    it('Should render the logo of the company.', () => {
      const logo = Navbar.getByTestId('company-logo');
      expect(logo).toBeInTheDocument();
    });

    it('Shows the cart button.', () => {
      const cartBtn = Navbar.getByTestId('cart-btn');
      expect(cartBtn).toBeInTheDocument();
    });

    it('Should execute openCart on cart button click.', () => {
      const cartBtn = Navbar.getByTestId('cart-btn');

      fireEvent.click(cartBtn);

      expect(props.openCart).toBeCalledTimes(1);
    });

    it('Renders the length of the cart.', () => {
      const lengthSpan = Navbar.getByTestId('cart-length');
      expect(parseInt(lengthSpan.innerHTML)).toEqual(2);
    });
  });

  describe('/payment route', () => {
    let Navbar;
    let props;
    beforeEach(() => {
      props = {
        commonProps,
        location: {
          pathname: '/payment',
        },
      };

      Navbar = setUp(props);
    });

    it('Should render without problems.', () => {
      const htmlNavbar = Navbar.getByTestId('navbar');
      expect(htmlNavbar).toBeInTheDocument();
    });

    it('Should render the logo of the company.', () => {
      const logo = Navbar.getByTestId('company-logo');
      expect(logo).toBeInTheDocument();
    });

    it('Should NOT render cart button.', () => {
      const btnContainer = Navbar.getByTestId('cart-btn-container');
      expect(btnContainer.childElementCount).toBe(0);
    });
  });
});
