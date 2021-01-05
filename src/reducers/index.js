import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import toggleCartReducer from './toggleCartReducer';
import filtersReducer from './filtersReducer';
import productDetailReducer from './productDetailReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  cartIsOpened: toggleCartReducer,
  activeFilters: filtersReducer,
  activeProductDetail: productDetailReducer,
});
