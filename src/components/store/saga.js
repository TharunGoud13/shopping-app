import { LOGIN, loginSuccess, loginFailure } from "./action";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* loginSaga(action) {
  const data = action.payload;
  console.log("data---", data);
  const url = "https://apis.ccbp.in/login";
  try {
    const response = yield axios.post(url, data);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
