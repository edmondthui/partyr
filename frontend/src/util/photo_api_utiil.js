import axios from 'axios';

export const fetchPhotos = () => {
  return axios.get('/api/photo/')
}

export const fetchPhoto = (docId) => {
  return axios.get(`/api/photo/${docId}`)
}

export const uploadPhoto = (docData) => {
  return axios.post(`/api/photo/upload`, docData)
}