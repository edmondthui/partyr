import * as APIUtil from '../util/party_api_util';

export const RECEIVE_PARTY = "RECEIVE_PARTY";
export const RECEIVE_ALL_PARTIES = "RECEIVE_ALL_PARTY";
export const RECEIVE_PARTY_ERRORS = "RECEIVE_PARTY_ERRORS";
export const REMOVE_PARTY_ERRORS = "REMOVE_PARTY_ERRORS";
export const UPDATE_PARTY = "UPDATE_PARTY";

const receiveParty = party => {
  return {
  type: RECEIVE_PARTY,
  party
}}

const receiveAllParties = parties => ({
  type: RECEIVE_ALL_PARTIES,
  parties
})

const receivePartyErrors = errors => {
  return {
  type: RECEIVE_PARTY_ERRORS,
  errors
}}

const removePartyErrors = () => ({
  type: REMOVE_PARTY_ERRORS
})

const updateParty = party => ({
  type: UPDATE_PARTY,
  party
})

export const fetchParty = partyId => dispatch => {
  return APIUtil.fetchParty(partyId)
    .then(party => dispatch(receiveParty(party)))
}

export const fetchParties = () => dispatch => {
  return APIUtil.fetchParties()
    .then(party => dispatch(receiveAllParties(party)))
}

export const createParty = partyData => dispatch => {
  return APIUtil.createParty(partyData)
    .then(party => {
      dispatch(receiveParty(party))
    }, err => (
      dispatch(receivePartyErrors(err.response.data))
    ))

}

export const clearPartyErrors = () => dispatch => {
  return dispatch(removePartyErrors())
}

export const putParty = partyData => dispatch => {
  return APIUtil.putParty(partyData)
    .then(party => dispatch(updateParty(party)))
}