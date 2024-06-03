import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRIME_DEALS,
  GET_PRIME_DEALS_SUCCESS,
  GET_PRIME_DEALS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./action";

const initialState = {
  loginLoading: false,
  loginResponse: {},
  loginError: null,
  getProductsLoading: false,
  getProductsResponse: [],
  getProductsError: null,
  getPrimeDealsLoading: false,
  getPrimeDealsResponse: [],
  getPrimeDealsError: null,
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginResponse: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: action.error,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        getProductsLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        getProductsLoading: false,
        getProductsResponse: action.payload,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        getProductsLoading: false,
        getProductsError: action.error,
      };
    case GET_PRIME_DEALS:
      return {
        ...state,
        getPrimeDealsLoading: true,
      };
    case GET_PRIME_DEALS_SUCCESS:
      return {
        ...state,
        getPrimeDealsResponse: action.payload,
        getPrimeDealsLoading: false,
      };
    case GET_PRIME_DEALS_FAILURE:
      return {
        ...state,
        getPrimeDealsError: action.error,
        getPrimeDealsLoading: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
