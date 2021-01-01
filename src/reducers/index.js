import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import toggleCartReducer from './toggleCartReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  cartIsOpened: toggleCartReducer,
  activeFilters: filtersReducer,
});
