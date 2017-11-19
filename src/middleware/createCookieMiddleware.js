// External
import Cookies from 'js-cookie';

// Internal
import {
  FULFILLED,
  USER_LOGIN_REQUEST
  // USER_LOGOUT_REQUEST
} from '../actions/types';

export default function createCookieMiddleware() {
  return store => next => action => {
    switch (action.type) {
      case `${USER_LOGIN_REQUEST}_${FULFILLED}`:
        Cookies.set('auth_token', action.payload.data.auth_token);
        return next(action);
      default: return next(action);
    }
  };
}
