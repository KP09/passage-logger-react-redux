import { combineReducers } from 'redux';

import flashMessages from './flashMessagesReducer';
import loading from './loadingReducer';
import emailConfirmation from './emailConfirmationReducer';
import userLogin from './loginReducer';
import passage from './passageReducer';

export default combineReducers({
  flashMessages,
  loading,
  emailConfirmation,
  userLogin,
  passage
});
