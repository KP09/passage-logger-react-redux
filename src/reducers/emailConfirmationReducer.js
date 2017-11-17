import {
  PENDING,
  FULFILLED,
  REJECTED,
  CONFIRM_EMAIL,
} from '../actions/types';

const initialState = {
  error: true,
  status: null
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case `${CONFIRM_EMAIL}_${PENDING}`:
      return {
        ...state,
      };
    case `${CONFIRM_EMAIL}_${FULFILLED}`:
      return {
        ...state,
        error: false
      }
    case `${CONFIRM_EMAIL}_${REJECTED}`:
      return {
        ...state,
        error: true,
        status: action.payload.response.status
      }
    default: return state;
  }
}
