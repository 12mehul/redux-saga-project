import { all } from "redux-saga/effects";
import { watchCreateUsersSaga } from "./register/sagas";
import { watchUsersSaga } from "./users/sagas";

// Root saga: combine multiple sagas into one
export default function* rootSaga() {
  yield all([watchCreateUsersSaga(), watchUsersSaga()]);
}
