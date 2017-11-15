import shortid from 'shortid';
import { ADD_FLASH_MESSAGE } from '../actions/types';

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
    default: return state;
  }
}
