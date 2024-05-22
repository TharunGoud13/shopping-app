import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";

const initialState = {
  loginLoading: false,
  loginResponse: {},
  loginError: null,
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
  }
};

export default reducer;
