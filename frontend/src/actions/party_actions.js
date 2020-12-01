import * as APIUtil from '../util/party_api_util';

export const RECEIVE_PARTY = "RECEIVE_PARTY";
export const RECEIVE_ALL_PARTIES = "RECEIVE_PARTY";

const receiveParty = party => ({
  type: RECEIVE_PARTY,
  party
})

const receiveAllParties = parties => ({
  type: RECEIVE_ALL_PARTIES,
  parties
})

export const fetchParty = partyId => dispatch => {
  return APIUtil.fetchParty(partyId)
    .then( party => dispatch(receiveParty(party)))
}
export const fetchParties = () => dispatch => {
  return APIUtil.fetchParties()
    .then( party => dispatch(receiveAllParties(party)))
}