import mockAPI from '../apis/mockAPI';
import history from '../history';
import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  OPEN_CART,
  CLOSE_CART,
  TOGGLE_BASIC_FILTER,
  CHANGE_PRICE_FILTER,
  CHANGE_SORT,
  FILTER_PRODUCTS,
  GO_TO_PRODUCT,
  RESET_PRODUCT_DETAIL,
  PLACE_ORDER,
} from './types';

// Action creators to fetch products from the API.
export const fetchProducts = () => async (dispatch) => {
  const { data } = await mockAPI.get('/products', { params: { items: 9 } });

  dispatch({ type: FETCH_PRODUCTS, payload: data.products });
};

export const filterProducts = () => async (dispatch, getState) => {
  const { activeFilters } = getState();
  const { basic, priceRange, sort } = activeFilters;
  const [priceLowerLimit, priceUpperLimit] = priceRange.limits;

  const { data } = await mockAPI.get('/products', {
    params: {
      items: 9,
      filter: basic === 'yes' ? 'basics' : 'non-basics',
      sort,
      priceLowerLimit,
      priceUpperLimit,
    },
  });

  dispatch({ type: FILTER_PRODUCTS, payload: data.products });
};

// Action creators to see product detail.
export const goToProduct = (productId) => async (dispatch) => {
  const { data } = await mockAPI.get(`/products/${productId}`);

  dispatch({ type: GO_TO_PRODUCT, payload: data });
};

export const resetProductDetail = () => {
  return { type: RESET_PRODUCT_DETAIL };
};

// Action creators to add/remove product from cart or open/close the cart.
export const addProductToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      basics: product.basics,
      img: product.img,
    },
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const openCart = (cartLength) => {
  return { type: OPEN_CART, payload: cartLength };
};

export const closeCart = () => {
  return { type: CLOSE_CART };
};

// Action creators to modify the active filters.
export const toggleBasicFilter = () => {
  return { type: TOGGLE_BASIC_FILTER };
};

export const changePriceFilter = (priceObj) => {
  return { type: CHANGE_PRICE_FILTER, payload: priceObj };
};

export const changeSort = (sortCriteria) => {
  return { type: CHANGE_SORT, payload: sortCriteria };
};

// Action creators to handle PaymentForm requests.
export const placeOrder = (formValues) => async (dispatch) => {
  try {
    const response = await mockAPI.post('/order', formValues);

    dispatch({ type: PLACE_ORDER, payload: response.data });
    history.push('/payment/success');
  } catch (err) {
    console.log(err);
  }
};
