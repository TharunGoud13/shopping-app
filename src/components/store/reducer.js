import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "./action";

const initialState = {
  loginLoading: false,
  loginResponse: {},
  loginError: null,
  getProductsLoading: false,
  getProductsResponse: [],
  getProductsError: null,
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

    default:
      return state;
  }
};

export default reducer;
