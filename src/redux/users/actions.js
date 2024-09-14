export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILURE = "USERS_FAILURE";

export const USERS_DETAILS_REQUEST = "USERS_DETAILS_REQUEST";
export const USERS_DETAILS_SUCCESS = "USERS_DETAILS_SUCCESS";
export const USERS_DETAILS_FAILURE = "USERS_DETAILS_FAILURE";

export const USERS_UPDATE_REQUEST = "USERS_UPDATE_REQUEST";
export const USERS_UPDATE_SUCCESS = "USERS_UPDATE_SUCCESS";
export const USERS_UPDATE_FAILURE = "USERS_UPDATE_FAILURE";

export const USERS_DELETE_REQUEST = "USERS_DELETE_REQUEST";
export const USERS_DELETE_SUCCESS = "USERS_DELETE_SUCCESS";
export const USERS_DELETE_FAILURE = "USERS_DELETE_FAILURE";

export const usersRequest = () => ({
  type: USERS_REQUEST,
});

export const usersSuccess = (users) => ({
  type: USERS_SUCCESS,
  payload: users,
});

export const usersFailure = (error) => ({
  type: USERS_FAILURE,
  payload: error,
});

export const usersDetailsRequest = (id) => ({
  type: USERS_DETAILS_REQUEST,
  payload: id,
});

export const usersDetailsSuccess = (user) => ({
  type: USERS_DETAILS_SUCCESS,
  payload: user,
});

export const usersDetailsFailure = (error) => ({
  type: USERS_DETAILS_FAILURE,
  payload: error,
});

export const usersUpdateRequest = (id, data) => ({
  type: USERS_UPDATE_REQUEST,
  payload: { id, data },
});

export const usersUpdateSuccess = (user) => ({
  type: USERS_UPDATE_SUCCESS,
  payload: user,
});

export const usersUpdateFailure = (error) => ({
  type: USERS_UPDATE_FAILURE,
  payload: error,
});

export const usersDeleteRequest = (id) => ({
  type: USERS_DELETE_REQUEST,
  payload: id,
});

export const usersDeleteSuccess = () => ({
  type: USERS_DELETE_SUCCESS,
});

export const usersDeleteFailure = (error) => ({
  type: USERS_DELETE_FAILURE,
  payload: error,
});
