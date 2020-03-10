import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId => dispatch => {
  return UserUtil.fetchUser(userId)
    .then(res => dispatch(receiveUser(res)))
};

export const createUser = user => {
  return
}


