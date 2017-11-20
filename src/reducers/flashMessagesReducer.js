import shortid from 'shortid';
import {
  ADD_FLASH_MESSAGE,
  CONFIRM_EMAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  FULFILLED
} from '../actions/types';

const initialState = [
  {
    id: null,
    open: false,
    text: ''
  }
]

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          open: true,
          style: action.message.style,
          text: action.message.text
        }
      ];
    case `${CONFIRM_EMAIL}_${FULFILLED}`:
      return [
        ...state,
        {
          id: shortid.generate(),
          open: true,
          style: 'success',
          text: 'Thanks! You can now log in'
        }
      ]
    case `${USER_LOGIN_REQUEST}_${FULFILLED}`:
      return [
        ...state,
        {
          id: shortid.generate(),
          open: true,
          style: 'success',
          text: 'You are now logged in'
        }
      ]
    case USER_LOGOUT_REQUEST:
      return [
        ...state,
        {
          id: shortid.generate(),
          open: true,
          style: 'success',
          text: 'You have been logged out'
        }
      ]
    default: return state;
  }
}
