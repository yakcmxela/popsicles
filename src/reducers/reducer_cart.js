import { ADD_TO_CART } from '../actions/index';

const initialState = {
	products: [],
	subtotal: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if(state.products.length == 0) {
        return { ...state, 
          products: [ ...state.products, action.payload.product ],
          subtotal: action.payload.subtotal,
        };
      } else {
        let newState = state.products;
        let isNewProduct = true;
        newState.forEach((product) => {
          if(product.productSelected == action.payload.product.productSelected) {
            let newQuantity = parseInt(product.productQuantity) + parseInt(action.payload.product.productQuantity);
            let newPrice = parseFloat(product.productPrice) + parseFloat(action.payload.product.productPrice);
            product.productPrice = newPrice;
            product.productQuantity = newQuantity;
            isNewProduct = false;
          }
        });
        if(isNewProduct == true) {
          newState.push(action.payload.product);
        };
        return { ...state, 
          products: newState,
          subtotal: action.payload.subtotal,
        };
      }
      
    default:
      return state;
  }
}
