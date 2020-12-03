import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import partyErrorsReducer from './party_errors_reducer';
import photoErrorsReducer from './photo_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  party: partyErrorsReducer,
  photo: photoErrorsReducer
});
