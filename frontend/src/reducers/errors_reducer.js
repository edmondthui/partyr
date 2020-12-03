import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import partyErrorsReducer from './party_errors_reducer';
import documentErrorsReducer from './document_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  party: partyErrorsReducer,
  document: documentErrorsReducer
});