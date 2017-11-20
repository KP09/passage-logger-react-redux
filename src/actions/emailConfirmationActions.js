import axios from 'axios';
import { CONFIRM_EMAIL } from './types';

export function confirmEmail(token) {
  return({
    type: CONFIRM_EMAIL,
    payload: new Promise((resolve, reject) => {
      axios.post(
        "https://localhost:3001/api/v1/users/confirm",
        { token: token }
      ).then(
        response => { resolve(response) }
      ).catch(
        error => { reject(error); }
      );
    })
  });
}
