import {
  // PENDING,
  // FULFILLED,
  // REJECTED,
  SET_PASSAGE_FIELD,
  SET_PASSAGE_STEP,
  INCREMENT_PASSAGE_STEP,
  DECREMENT_PASSAGE_STEP
} from '../actions/types';

let initialState = {
  stepIndex: 0,
  departure_port: '',
  departure_date: null,
  departure_time: null,
  arrival_port: '',
  arrival_date: null,
  arrival_time: null,
  miles: '',
  hours: '',
  night_hours: '',
  role: '',
  description: '',
  tidal: false,
  overnight: false,
  ocean_passage: false
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_PASSAGE_STEP:
      return {
        ...state,
        stepIndex: action.newStepIndex
      }
    case INCREMENT_PASSAGE_STEP:
      return {
        ...state,
        stepIndex: state.stepIndex + 1
      };
    case DECREMENT_PASSAGE_STEP:
      return {
        ...state,
        stepIndex: state.stepIndex - 1
      };
    case SET_PASSAGE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    default: return state;
  }
}
