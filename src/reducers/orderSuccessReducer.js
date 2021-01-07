import { PLACE_ORDER } from '../actions/types';

const orderSuccessReducer = (state = null, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return action.payload;
    default:
      return state;
  }
};

export default orderSuccessReducer;
