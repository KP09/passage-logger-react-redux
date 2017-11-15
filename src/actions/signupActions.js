import axios from 'axios';

export function checkEmailUsed(email) {
  return dispatch => {
    return axios.post(
      "http://localhost:3001/api/v1/users/check_email_used",
      { email: email }
    );
  }
}

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(
      "http://localhost:3001/api/v1/users",
      { user: userData }
    );
  }
}
