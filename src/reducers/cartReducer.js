import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productFound = state.find(
        (product) => product.id === action.payload.id
      );

      if (productFound) {
        return state;
      }

      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
