import {
  USERS_DELETE_FAILURE,
  USERS_DELETE_REQUEST,
  USERS_DETAILS_FAILURE,
  USERS_DETAILS_REQUEST,
  USERS_DETAILS_SUCCESS,
  USERS_FAILURE,
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_UPDATE_FAILURE,
  USERS_UPDATE_REQUEST,
  USERS_UPDATE_SUCCESS,
} from "./actions";

const initialState = {
  loading: false,
  users: [],
  user: null,
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
    case USERS_DETAILS_REQUEST:
    case USERS_UPDATE_REQUEST:
    case USERS_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USERS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USERS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USERS_FAILURE:
    case USERS_DETAILS_FAILURE:
    case USERS_UPDATE_FAILURE:
    case USERS_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
