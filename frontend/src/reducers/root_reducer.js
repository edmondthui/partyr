import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import parties from './parties_reducer';
import users from './users_reducer';
import photos from './photos_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  parties,
  users,
  photos
});


export default RootReducer;