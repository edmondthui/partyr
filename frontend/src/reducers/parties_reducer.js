import { RECEIVE_PARTY, RECEIVE_ALL_PARTIES, UPDATE_PARTY } from '../actions/party_actions';

const partiesReducer = (state={ all: {}, party: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALL_PARTIES:
      newState.all = action.parties ? action.parties.data : {};
      return newState;
    case RECEIVE_PARTY:
      newState.party = action.party.data;
      return newState;
    case UPDATE_PARTY:
      newState.party = action.party.data;
      return newState;
    default:
      return state;
  }
}

export default partiesReducer;