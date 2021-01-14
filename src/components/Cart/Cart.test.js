import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Cart } from './index';
import history from '../../history';
import reducers from '../../reducers';
import { addProductToCart } from '../../actions';

const store = createStore(reducers);

const setUp = (props) => {
  return render(
    <Provider store={store}>
      <Router history={history}>
        <Cart {...props} />
      </Router>
    </Provider>
  );
};

const mockCart = [
  {
    id: 1,
    name: 'Product Test 1',
    price: '5.00',
    basics: false,
    img: 'https://picsum.photos/id/10/2500/1667',
  },
  {
    id: 2,
    name: 'Cup Coffe',
    price: '20.00',
    basics: true,
    img: 'https://picsum.photos/id/1/5616/3744',
  },
];

describe('Cart component', () => {
  describe('The cart is NOT empty.', () => {
    it('Should render the cart if props.cartIsOpened is true.', () => {
      const props = {
        cart: mockCart,
        cartIsOpened: true,
        closeCart: () => {},
        location: { pathname: '/' },
      };
      const Cart = setUp(props);

      const htmlCart = Cart.getByTestId('cart');
      expect(htmlCart).toBeInTheDocument();
    });

    it('Should NOT render the cart if props.cartIsOpened is false.', () => {
      const props = {
        cart: mockCart,
        cartIsOpened: false,
        closeCart: jest.fn(),
        location: { pathname: '/' },
      };
      const Cart = setUp(props);

      const htmlContainer = Cart.container;
      expect(htmlContainer.childElementCount).toEqual(0);
    });

    it('Should render the total price.', () => {
      const props = {
        cart: mockCart,
        cartIsOpened: true,
        closeCart: () => {},
        location: { pathname: '/' },
      };
      const Cart = setUp(props);
      const htmlPrice = Cart.getByTestId('price');

      const totalPrice = props.cart.reduce((acc, product) => {
        return parseFloat(product.price) + acc;
      }, 0);

      expect(htmlPrice.innerHTML).toEqual(`$${totalPrice}`);
    });

    it('Should render all the cart products.', () => {
      const props = {
        cart: mockCart,
        cartIsOpened: true,
        closeCart: () => {},
        location: { pathname: '/' },
      };

      props.cart.forEach((product) =>
        store.dispatch(addProductToCart(product))
      );

      const Cart = setUp(props);
      const productContainer = Cart.getByTestId('product-container');

      expect(productContainer.childElementCount).toEqual(props.cart.length);
    });
  });

  describe('The cart is EMPTY.', () => {
    it('Should NOT render the cart.', () => {
      const props = {
        cart: [],
        cartIsOpened: true,
        closeCart: jest.fn(),
        location: { pathname: '/' },
      };
      const Cart = setUp(props);
      const htmlContainer = Cart.container;

      expect(htmlContainer.childElementCount).toEqual(0);
    });
  });

  describe('User is in /payment route.', () => {
    it('Should NOT render the cart.', () => {
      const props = {
        cart: mockCart,
        cartIsOpened: true,
        closeCart: jest.fn(),
        location: { pathname: '/payment' },
      };
      const Cart = setUp(props);
      const htmlContainer = Cart.container;

      expect(htmlContainer.childElementCount).toEqual(0);
    });
  });

  describe('Events', () => {
    let props;
    let Cart;
    beforeEach(() => {
      props = {
        cart: mockCart,
        cartIsOpened: true,
        closeCart: jest.fn(),
        location: { pathname: '/' },
      };
      Cart = setUp(props);
    });

    it('Should call props.closeCart when close button is clicked.', () => {
      const closeBtn = Cart.getByTestId('close-btn');

      fireEvent.click(closeBtn);
      expect(props.closeCart).toBeCalledTimes(1);
    });

    it('Should change the route of the browser to /payment when link-1 is clicked.', () => {
      global.window = { location: { pathname: null } };

      const linkOne = Cart.getByTestId('payment-link-1');

      fireEvent.click(linkOne);
      expect(global.window.location.pathname).toEqual('/payment');
    });

    it('Shoud change the route of the browser to /payment when link-2 is clicked.', () => {
      global.window = { location: { pathname: null } };

      const linkTwo = Cart.getByTestId('payment-link-2');

      fireEvent.click(linkTwo);
      expect(global.window.location.pathname).toEqual('/payment');
    });
  });
});
