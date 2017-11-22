import axios from 'axios';
import {
  SET_PASSAGE_FIELD,
  SET_PASSAGE_STEP,
  INCREMENT_PASSAGE_STEP,
  DECREMENT_PASSAGE_STEP,
  CURRENT_USER_PASSAGES_REQUEST
} from './types';

export function setPassageField(field, value) {
  return {
    type: SET_PASSAGE_FIELD,
    field: field,
    value: value
  };
}

export function incrementPassageStep() {
  return {
    type: INCREMENT_PASSAGE_STEP,
  };
}

export function decrementPassageStep() {
  return {
    type: DECREMENT_PASSAGE_STEP,
  };
}

export function setPassageStep(newStepIndex) {
  return {
    type: SET_PASSAGE_STEP,
    newStepIndex: newStepIndex
  };
}

export function currentUserPassagesRequest() {
  return({
    type: CURRENT_USER_PASSAGES_REQUEST,
    payload: new Promise((resolve, reject) => {
      axios.get(
        "https://localhost:3001/api/v1/users/passages"
      ).then(
        response => { resolve(response) }
      ).catch(
        error => { reject(error); }
      );
    })
  });
}
