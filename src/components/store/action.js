export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const GET_PRIME_DEALS = "GET_PRIME_DEALS";
export const GET_PRIME_DEALS_SUCCESS = "GET_PRIME_DEALS_SUCCESS";
export const GET_PRIME_DEALS_FAILURE = "GET_PRIME_DEALS_FAILURE";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  error,
});

export const getPrimeDeals = () => ({
  type: GET_PRIME_DEALS,
});

export const getPrimeDealsSuccess = (payload) => ({
  type: GET_PRIME_DEALS_SUCCESS,
  payload,
});

export const getPrimeDealsFailure = (error) => ({
  type: GET_PRIME_DEALS_FAILURE,
  error,
});
