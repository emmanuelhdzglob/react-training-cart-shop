import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import toggleCartReducer from './toggleCartReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  cartIsOpened: toggleCartReducer,
});
