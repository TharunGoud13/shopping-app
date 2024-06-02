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

    case "ADD_TO_CART":
      // if we again add the same item, it will be in cart so we will check if current action.patload.id matches with id in cart of previous payload
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("action", action.payload);
      if (existingProductIndex >= 0) {
        // if id matches then we should update quantity so we assign the cart to empty list and access the item and update the quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      }
      return {
        ...state, //destructure the state
        cart: [...state.cart, { ...action.payload, quantity: 1 }], // add values to cart list and in list we destrucuter action.payload and give quantity as 1
      };
    case "REMOVE_FROM_CART":
      debugger;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default reducer;
