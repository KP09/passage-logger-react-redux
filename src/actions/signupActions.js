import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(
      "http://localhost:3001/api/v1/users",
      { user: userData }
    );
  }
}
