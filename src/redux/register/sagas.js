import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  USERS_CREATE_REQUEST,
  usersCreateFailure,
  usersCreateSuccess,
} from "./actions";

const createUser = (user) =>
  axios.post(
    "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/users",
    user
  );

function* createUserSaga(action) {
  try {
    const response = yield call(createUser, action.payload);
    yield put(usersCreateSuccess(response.data));
  } catch (error) {
    yield put(usersCreateFailure(error.message));
  }
}

export function* watchCreateUsersSaga() {
  yield takeEvery(USERS_CREATE_REQUEST, createUserSaga);
}
