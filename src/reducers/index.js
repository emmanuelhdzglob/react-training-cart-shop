import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import toggleCartReducer from './toggleCartReducer';
import filtersReducer from './filtersReducer';
import productDetailReducer from './productDetailReducer';
import orderSuccessReducer from './orderSuccessReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  cartIsOpened: toggleCartReducer,
  activeFilters: filtersReducer,
  activeProductDetail: productDetailReducer,
  form: formReducer,
  orderSuccess: orderSuccessReducer,
});
