import { combineReducers } from "redux";
import { usersCreateReducer } from "./register/reducers";
import { usersReducer } from "./users/reducers";

const rootReducers = combineReducers({
  create: usersCreateReducer,
  users: usersReducer,
});

export default rootReducers;
