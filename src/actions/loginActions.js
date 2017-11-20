import axios from 'axios';
import {
  SET_LOGIN_FIELD,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST
} from './types';

export function setLoginField(field, value) {
  return({
    type: SET_LOGIN_FIELD,
    field: field,
    value: value
  });
}

export function userLoginRequest(email, password) {
  return({
    type: USER_LOGIN_REQUEST,
    payload: new Promise((resolve, reject) => {
      axios.post(
        "https://localhost:3001/api/v1/users/login",
        {
          email: email,
          password: password
        }
      ).then(
        response => { resolve(response) }
      ).catch(
        error => { reject(error); }
      );
    })
  });
}

export function userLogoutRequest() {
  return({
    type: USER_LOGOUT_REQUEST
  });
}
