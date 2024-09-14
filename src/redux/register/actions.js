export const USERS_CREATE_REQUEST = "USERS_CREATE_REQUEST";
export const USERS_CREATE_SUCCESS = "USERS_CREATE_SUCCESS";
export const USERS_CREATE_FAILURE = "USERS_CREATE_FAILURE";
export const USERS_FORM_UPDATE = "USERS_FORM_UPDATE";

export const usersCreateRequest = (user) => ({
  type: USERS_CREATE_REQUEST,
  payload: user,
});

export const usersCreateSuccess = (user) => ({
  type: USERS_CREATE_SUCCESS,
  payload: user,
});

export const usersCreateFailure = (error) => ({
  type: USERS_CREATE_FAILURE,
  payload: error,
});

export const usersFormUpdate = (name, value) => ({
  type: USERS_FORM_UPDATE,
  payload: { name, value },
});
