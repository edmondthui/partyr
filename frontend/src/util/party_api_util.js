import axios from 'axios';

export const fetchParties = () => {
  return axios.get('/api/parties/parties')
}

export const fetchParty = (partyId) => {
  return axios.get(`/api/parties/party/${partyId}`)
}

export const createParty = (partyData) => {
  return axios.post(`/api/parties/party`, partyData)
}