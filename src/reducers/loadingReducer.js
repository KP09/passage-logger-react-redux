import {
  PENDING,
  FULFILLED,
  REJECTED,
  CONFIRM_EMAIL
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
    default: return state;
  }
}
