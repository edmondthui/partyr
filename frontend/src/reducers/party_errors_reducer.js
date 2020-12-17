import {
  RECEIVE_PARTY_ERRORS,
  REMOVE_PARTY_ERRORS,
  RECEIVE_PARTY
} from '../actions/party_actions';

const partyErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PARTY_ERRORS:
      return action.errors; 
    case REMOVE_PARTY_ERRORS:
      return [];
    case RECEIVE_PARTY:
      return [];
    default:
      return oldState;
  }
};

export default partyErrorsReducer;