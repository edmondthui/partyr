import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import parties from './parties_reducer';
import users from './users_reducer';
import documents from './documents_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  parties,
  users,
  documents
});

export default RootReducer;