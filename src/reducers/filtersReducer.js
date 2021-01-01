import {
  TOGGLE_BASIC_FILTER,
  CHANGE_PRICE_FILTER,
  CHANGE_SORT,
} from '../actions/types';

const INITIAL_STATE = {
  basic: 'all',
  priceRange: { limits: [0, Infinity] },
  sortBy: 'none',
};

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_BASIC_FILTER:
      return {
        ...state,
        basic: state.basic === 'all' || state.basic === 'no' ? 'yes' : 'no',
      };
    case CHANGE_PRICE_FILTER:
      return {
        ...state,
        priceRange: action.payload,
      };
    case CHANGE_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
