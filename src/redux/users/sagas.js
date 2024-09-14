import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  USERS_DELETE_REQUEST,
  USERS_DETAILS_REQUEST,
  USERS_REQUEST,
  USERS_UPDATE_REQUEST,
  usersDeleteFailure,
  usersDeleteSuccess,
  usersDetailsFailure,
  usersDetailsSuccess,
  usersFailure,
  usersSuccess,
  usersUpdateFailure,
  usersUpdateSuccess,
} from "./actions";

const usersFetchApi = () =>
  axios.get("https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/users");
const userDetailsFetchApi = (id) =>
  axios.get(
    `https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/users/${id}`
  );
const userUpdateFetchApi = (id, data) =>
  axios.put(
    `https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/users/${id}`,
    data
  );
const userDeleteApi = (id) =>
  axios.delete(
    `https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/users/${id}`
  );

function* usersFetchSagaApi() {
  try {
    const response = yield call(usersFetchApi);
    yield put(usersSuccess(response.data));
  } catch (error) {
    yield put(usersFailure(error.message));
  }
}

function* userDetailsSaga(action) {
  try {
    const response = yield call(userDetailsFetchApi, action.payload);
    yield put(usersDetailsSuccess(response.data));
  } catch (error) {
    yield put(usersDetailsFailure(error.message));
  }
}

function* updateUserSaga(action) {
  try {
    const { id, data } = action.payload;
    const response = yield call(userUpdateFetchApi, id, data);
    yield put(usersUpdateSuccess(response.data));
    yield put({ type: USERS_REQUEST }); // Refresh users
  } catch (error) {
    yield put(usersUpdateFailure(error.message));
  }
}

function* deleteUserSaga(action) {
  try {
    yield call(userDeleteApi, action.payload);
    yield put(usersDeleteSuccess());
    yield put({ type: USERS_REQUEST });
  } catch (error) {
    yield put(usersDeleteFailure(error.message));
  }
}

export function* watchUsersSaga() {
  yield takeEvery(USERS_REQUEST, usersFetchSagaApi);
  yield takeEvery(USERS_DETAILS_REQUEST, userDetailsSaga);
  yield takeEvery(USERS_UPDATE_REQUEST, updateUserSaga);
  yield takeEvery(USERS_DELETE_REQUEST, deleteUserSaga);
}
