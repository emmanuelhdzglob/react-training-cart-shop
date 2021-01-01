import {
  PRODUCT_SELECTED,
  REMOVE_FROM_CART,
  OPEN_CART,
  CLOSE_CART,
  TOGGLE_BASIC_FILTER,
  CHANGE_PRICE_FILTER,
  CHANGE_SORT,
  FILTER_PRODUCTS,
} from './types';
import filterByCriteria from '../utils/filterByCriteria';
import sortByCriteria from '../utils/sortByCriteria';

export const filterProducts = (products) => (dispatch, getState) => {
  const { activeFilters } = getState();
  const { basic, priceRange, sortBy } = activeFilters;
  const [lowerLimit, upperLimit] = priceRange.limits;

  const filteredProducts = filterByCriteria(
    products,
    basic,
    lowerLimit,
    upperLimit
  );

  dispatch({
    type: FILTER_PRODUCTS,
    payload:
      sortBy === 'none'
        ? filteredProducts
        : sortByCriteria(filteredProducts, sortBy),
  });
};

export const selectProduct = (product) => {
  return {
    type: PRODUCT_SELECTED,
    payload: product,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const openCart = (cartLength) => {
  return { type: OPEN_CART, payload: cartLength };
};

export const closeCart = () => {
  return { type: CLOSE_CART };
};

export const toggleBasicFilter = () => {
  return { type: TOGGLE_BASIC_FILTER };
};

export const changePriceFilter = (priceObj) => {
  return { type: CHANGE_PRICE_FILTER, payload: priceObj };
};

export const changeSort = (sortCriteria) => {
  return { type: CHANGE_SORT, payload: sortCriteria };
};
