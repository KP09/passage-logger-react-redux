import shortid from 'shortid';
import {
  ADD_FLASH_MESSAGE,
  CONFIRM_EMAIL,
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
    default: return state;
  }
}
