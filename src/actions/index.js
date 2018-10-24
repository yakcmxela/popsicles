import axios from 'axios';

const wooKey = 'ck_b7f6d7ad722585b48bb4db6658284e0b4dc5b67e';
const wooSecret = 'cs_0f4873b6e632629aa6a590cae3495bf31f6a0eea';
const wooAccess = `consumer_key=${wooKey}&consumer_secret=${wooSecret}`;
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_SUBTOTAL = 'UPDATE_SUBTOTAL';

export function fetchCategories() {
  let response = axios.get(
    `https://localhost/popsicles/wp-json/wc/v1/products/categories?${wooAccess}`
  );
  return {
    type: FETCH_CATEGORIES,
    payload: response,
  };
}

export function fetchProducts(category) {
  let response = axios.get(
    `https://localhost/popsicles/wp-json/wc/v1/products?category=${category}&${wooAccess}`
  );
  return {
    type: FETCH_PRODUCTS,
    payload: response,
  };
}

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}
