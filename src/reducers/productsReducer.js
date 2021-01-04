import { FETCH_PRODUCTS, FILTER_PRODUCTS } from '../actions/types';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...state, ...action.payload];
    case FILTER_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default productsReducer;
