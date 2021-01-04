import mockAPI from '../apis/mockAPI';
import {
  FETCH_PRODUCTS,
  PRODUCT_SELECTED,
  REMOVE_FROM_CART,
  OPEN_CART,
  CLOSE_CART,
  TOGGLE_BASIC_FILTER,
  CHANGE_PRICE_FILTER,
  CHANGE_SORT,
  FILTER_PRODUCTS,
} from './types';

export const filterProducts = () => async (dispatch, getState) => {
  const { activeFilters } = getState();
  const { basic, priceRange, sort } = activeFilters;
  const [priceLowerLimit, priceUpperLimit] = priceRange.limits;

  const { data } = await mockAPI.get('/products', {
    params: {
      items: 9,
      filter: basic === 'yes' ? 'basics' : 'non-basics',
      sort,
      priceLowerLimit,
      priceUpperLimit,
    },
  });

  dispatch({ type: FILTER_PRODUCTS, payload: data.products });
};

export const fetchProducts = () => async (dispatch) => {
  const { data } = await mockAPI.get('/products', { params: { items: 9 } });

  dispatch({ type: FETCH_PRODUCTS, payload: data.products });
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
