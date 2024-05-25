import {
  GET_PRODUCTS,
  getProductsSuccess,
  getProductsFailure,
  GET_PRIME_DEALS,
  getPrimeDealsSuccess,
  getPrimeDealsFailure,
} from "./action";
import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import Cookies from "js-cookie";

let jwtToken = Cookies.get("jwt_token");

function* getProductsSaga(action) {
  console.log("action---", action);
  const payload = action.payload;

  let url = `https://apis.ccbp.in/products`;

  if (payload?.id) {
    console.log("checkkk", payload?.id);
    url += `/${payload?.id}`;
  }

  if (payload?.sort) {
    console.log("typeee", payload?.sort);
    url += `?sort_by=${payload?.sort}`;
  }

  try {
    const response = yield call(axios.get, url, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    yield put(getProductsSuccess(response.data));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* getPrimeDealsSaga() {
  const url = "https://apis.ccbp.in/prime-deals";
  try {
    const response = yield call(axios.get, url, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    console.log(response);
    if (response.status === 200) {
      yield put(getPrimeDealsSuccess(response.data));
    } else {
      yield put(getPrimeDealsFailure(response));
    }
  } catch (error) {
    yield put(getPrimeDealsFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
  yield takeLatest(GET_PRIME_DEALS, getPrimeDealsSaga);
}
