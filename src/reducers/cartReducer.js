const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCT_SELECTED':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
