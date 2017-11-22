// External
import Cookies from 'js-cookie';

// Internal
import {
  FULFILLED,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST
} from '../actions/types';

export default function createCookieMiddleware() {
  return store => next => action => {
    switch (action.type) {
      case `${USER_LOGIN_REQUEST}_${FULFILLED}`:
        console.log();
        Cookies.set(
          'auth_token',
          action.payload.data.auth_token,
          store.getState().userLogin.rememberMe && { expires: 365 }
          // { secure: true }
        );
        return next(action);
      case USER_LOGOUT_REQUEST:
        Cookies.remove('auth_token');
        return next(action);
      default: return next(action);
    }
  };
}
