import { GET_PRODUCTS, getProductsSuccess, getProductsFailure } from "./action";
import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import Cookies from "js-cookie";

function* getProductsSaga(action) {
  const payload = action.payload;
  console.log(payload);

  let url = `https://apis.ccbp.in/products?sort_by=${payload?.sort}`;
  let jwtToken = Cookies.get("jwt_token");

  if (payload?.id) {
    url += `/${payload?.id}`;
  }

  if (payload?.category) {
    url += `&category=${payload.category}`;
  }

  if (payload?.rating) {
    url += `&rating=${payload?.rating}`;
  }

  // if (payload?.sort) {
  //   url += `?sort_by=${payload?.sort}`;
  // }

  if (payload?.title) {
    url += `&title_search=${payload?.title}`;
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

export default function* rootSaga() {
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
}
