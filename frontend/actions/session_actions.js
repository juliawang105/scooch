export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
import * as SessionUtil from "../util/session_util";

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const login = user => dispatch =>
  SessionUtil.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => dispatch =>
  SessionUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch =>
  SessionAPIUtil.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const clearErrors = () => dispatch => dispatch(receiveErrors([]));
