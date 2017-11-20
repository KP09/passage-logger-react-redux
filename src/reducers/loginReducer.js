// External
import Cookies from 'js-cookie';

import {
  PENDING,
  FULFILLED,
  REJECTED,
  SET_LOGIN_FIELD,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST
} from '../actions/types';

let initialState = {
  email: '',
  password: '',
  rememberMe: false,
  error: '',
  auth_token: Cookies.get('auth_token')
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_LOGIN_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case `${USER_LOGIN_REQUEST}_${PENDING}`:
      return {
        ...state,
      };
    case `${USER_LOGIN_REQUEST}_${FULFILLED}`:
      return {
        ...state,
        email: '',
        password: '',
        rememberMe: false,
        auth_token: action.payload.data.auth_token
      };
    case `${USER_LOGIN_REQUEST}_${REJECTED}`:
      return {
        ...state,
        error: action.payload.response.data.error
      };
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        auth_token: null
      }
    default: return state;
  }
}
