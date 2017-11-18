import {
  PENDING,
  FULFILLED,
  REJECTED,
  CONFIRM_EMAIL,
  USER_LOGIN_REQUEST
} from '../actions/types';

export default (state = false, action = {}) => {
  switch(action.type) {
    // Email confirmation
    case `${CONFIRM_EMAIL}_${PENDING}`:
      return true;
    case `${CONFIRM_EMAIL}_${FULFILLED}`:
      return false;
    case `${CONFIRM_EMAIL}_${REJECTED}`:
      return false;
    // Login
    case `${USER_LOGIN_REQUEST}_${PENDING}`:
      return true;
    case `${USER_LOGIN_REQUEST}_${FULFILLED}`:
      return false;
    case `${USER_LOGIN_REQUEST}_${REJECTED}`:
      return false;
    default: return state;
  }
}
