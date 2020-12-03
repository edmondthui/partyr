import axios from 'axios';

export const fetchDocuments = () => {
  return axios.get('/api/document/')
}

export const fetchDocument = (docId) => {
  return axios.get(`/api/document/${docId}`)
}

export const uploadDocument = (docData) => {
  return axios.post(`/api/document/upload`, docData)
}