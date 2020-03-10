import { RECEIVE_USER } from "../actions/user_actions";

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {
        [action.user.id]: action.user
      });
    //brackets are evaluated first before the key is set. we don't want the words "action.user.id"
    default:
      return state;
  }
};
