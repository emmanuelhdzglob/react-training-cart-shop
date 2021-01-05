import { GO_TO_PRODUCT, RESET_PRODUCT_DETAIL } from '../actions/types';

const productDetailReducer = (state = null, action) => {
  switch (action.type) {
    case GO_TO_PRODUCT:
      return { ...action.payload };
    case RESET_PRODUCT_DETAIL:
      return null;
    default:
      return state;
  }
};

export default productDetailReducer;
