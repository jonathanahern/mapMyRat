import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
};
