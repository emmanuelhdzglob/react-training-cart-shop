import products from './products';

const INITIAL_STATE = {
  items: products,
  filteredItems: [...products],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FILTER_PRODUCTS':
      return { ...state, filteredItems: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
