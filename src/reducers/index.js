import { combineReducers } from 'redux';
import Store from './reducer_store';
import Cart from './reducer_cart';

const rootReducer = combineReducers({
  store: Store,
  cart: Cart,
});

export default rootReducer;
