import {
  USERS_CREATE_FAILURE,
  USERS_CREATE_REQUEST,
  USERS_CREATE_SUCCESS,
  USERS_FORM_UPDATE,
} from "./actions";

const initialState = {
  loading: false,
  user: null,
  error: null,
  formData: {
    name: "",
    email: "",
    phone: "",
  },
};

export const usersCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USERS_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        formData: {
          name: "",
          email: "",
          phone: "",
        }, // Reset form data on success
      };
    case USERS_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USERS_FORM_UPDATE:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
