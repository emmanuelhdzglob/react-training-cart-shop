import { OPEN_CART, CLOSE_CART } from '../actions/types';

const toggleCartReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_CART:
      if (action.payload === 0) {
        return false;
      }

      return true;
    case CLOSE_CART:
      return false;
    default:
      return state;
  }
};

export default toggleCartReducer;
