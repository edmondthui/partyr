import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducers';
import parties from './parties_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  parties
});

export default RootReducer;