import { PRODUCT_SELECTED } from '../actions/types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_SELECTED:
      const productFound = state.find(
        (product) => product.id === action.payload.id
      );

      if (productFound) {
        return state;
      }

      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
