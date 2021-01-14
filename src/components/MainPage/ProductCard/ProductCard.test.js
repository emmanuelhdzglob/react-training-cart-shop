import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { ProductCard } from './index';
import history from '../../../history';

const setUp = (props) => {
  return render(
    <Router history={history}>
      <ProductCard {...props} />
    </Router>
  );
};

const getMockProduct = (basics) => {
  return {
    id: 1,
    basics,
    comments: '2',
    name: 'Test Product',
    rate: '4.5',
    price: '120.00',
    img: 'https://picsum.photos/id/0/5616/3744',
  };
};

describe('ProductCard component', () => {
  describe('props.product.basics set to true.', () => {
    let props;
    let ProductCard;
    beforeEach(() => {
      props = {
        product: getMockProduct(true),
        addProductToCart: jest.fn(),
      };
      ProductCard = setUp(props);
    });

    it('Should render the text BASICS if props.basics is true.', () => {
      const basicsContainer = ProductCard.getByTestId('basics');
      expect(basicsContainer.innerHTML).toEqual('BASICS');
    });

    it('Should render a div with class is-green if props.basics is true.', () => {
      const basicsContainer = ProductCard.getByTestId('basics');
      expect(basicsContainer).toHaveClass('is-green');
    });
  });

  describe('props.products.basics set to false.', () => {
    let props;
    let ProductCard;
    beforeEach(() => {
      props = {
        product: getMockProduct(false),
        addProductToCart: jest.fn(),
      };
      ProductCard = setUp(props);
    });

    it('Should NOT render any text when props.basics is false.', () => {
      const basicsContainer = ProductCard.getByTestId('basics');
      expect(basicsContainer.innerHTML).toEqual('');
    });
  });

  describe('Rendering and events.', () => {
    let props;
    let ProductCard;
    beforeEach(() => {
      props = {
        product: getMockProduct(true),
        addProductToCart: jest.fn(),
      };
      ProductCard = setUp(props);
    });

    it('Should render without problems.', () => {
      const htmlCard = ProductCard.getByTestId('card-container');
      expect(htmlCard).toBeInTheDocument();
    });

    it('Should render an img element with src according to the state.', () => {
      const productImg = ProductCard.getByTestId('product-img');
      expect(productImg.getAttribute('src')).toEqual(props.product.img);
    });

    it('Should render the number of comments according to the state.', () => {
      const commentCounter = ProductCard.getByTestId('comment-counter');
      expect(commentCounter.innerHTML).toEqual(props.product.comments);
    });

    it('Should render the price according to the state.', () => {
      const price = ProductCard.getByTestId('price');
      expect(price.innerHTML).toEqual(`$${props.product.price}`);
    });

    it('Should call addProductToCart when add-btn is clicked.', () => {
      const addToCartBtn = ProductCard.getByTestId('add-btn');

      fireEvent.click(addToCartBtn);
      expect(props.addProductToCart).toBeCalledTimes(1);
    });

    it('Should change the route of the browser to /product/:id when see details is clicked', () => {
      global.window = { location: { pathname: null } };

      const productLink = ProductCard.getByTestId('product-link');

      fireEvent.click(productLink);
      expect(global.window.location.pathname).toEqual(
        `/product/${props.product.id}`
      );
    });
  });
});
