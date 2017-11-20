import axios from 'axios';
import {
  CURRENT_USER_PASSAGES_REQUEST
} from './types';

export function currentUserPassagesRequest() {
  return({
    type: CURRENT_USER_PASSAGES_REQUEST,
    payload: new Promise((resolve, reject) => {
      axios.get(
        "https://localhost:3001/api/v1/users/passages",
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
