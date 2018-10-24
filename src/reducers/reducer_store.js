import { FETCH_PRODUCTS, FETCH_CATEGORIES } from '../actions/index';

const initialState = {
  products: [],
  categories: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload.data };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload.data };
    default:
      return state;
  }
}
