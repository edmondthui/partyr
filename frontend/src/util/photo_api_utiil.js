import axios from 'axios';

export const fetchPhotos = () => {
  return axios.get('/api/photo/')
}

export const fetchPhoto = (id) => {
  return axios.get(`/api/photo/${id}`)
}

export const uploadPhoto = (docData) => {
  return axios.post(`/api/photo/upload`, docData)
}
