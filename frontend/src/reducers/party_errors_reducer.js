import {
  RECEIVE_PARTY_ERRORS,
  REMOVE_PARTY_ERRORS
} from '../actions/party_actions';

const partyErrorsReducer = (oldState = [], action) => {
  debugger;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PARTY_ERRORS:
      return action.errors; 
    case REMOVE_PARTY_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default partyErrorsReducer;