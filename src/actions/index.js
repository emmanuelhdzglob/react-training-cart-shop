import {
  PRODUCT_SELECTED,
  REMOVE_FROM_CART,
  OPEN_CART,
  CLOSE_CART,
} from './types';

export const selectProduct = (product) => {
  return {
    type: PRODUCT_SELECTED,
    payload: product,
  };
};

export const removeProductFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product.id,
  };
};

export const openCart = (cartLength) => {
  return { type: OPEN_CART, payload: cartLength };
};

export const closeCart = () => {
  return { type: CLOSE_CART };
};
