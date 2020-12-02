import {
  RECEIVE_PARTY_ERRORS,
  REMOVE_PARTY_ERRORS
} from '../actions/party_actions';

const partyErrorsReducer = (oldState = [], action) => {

  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PARTY_ERRORS:
      debugger
      return action.errors; 
    case REMOVE_PARTY_ERRORS:
      debugger
      return [];
    default:
      return oldState;
  }
};

export default partyErrorsReducer;