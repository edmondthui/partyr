import { combineReducers } from 'redux';
import partiesReducer from './parties_reducer';


const entitiesReducer = combineReducers({
  parties: partiesReducer,
});

export default entitiesReducer;