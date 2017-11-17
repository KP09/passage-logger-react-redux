import {
  PENDING,
  FULFILLED,
  REJECTED,
  USER_LOGIN_REQUEST,
  SET_LOGIN_FIELD
} from '../actions/types';

const initialState = {
  email: null,
  password: null
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case `${SET_LOGIN_FIELD}`:
      return {
        ...state,
        [action.field]: action.email
      }
    case `${USER_LOGIN_REQUEST}_${PENDING}`:
      return {
        ...state,
      };
    case `${USER_LOGIN_REQUEST}_${FULFILLED}`:
      return {
        ...state,
      };
    case `${USER_LOGIN_REQUEST}_${REJECTED}`:
      return {
        ...state,
      };
    default: return state;
  }
}
