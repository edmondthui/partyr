import * as APIUtil from '../util/photo_api_utiil';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO_ERRORS = "REMOVE_PHOTO_ERRORS";

const receivePhoto = photo => {
  return {
  type: RECEIVE_PHOTO,
  photo
}}

const receiveAllPhoto = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
})

const receivePhotoErrors = errors => {
  return {
  type: RECEIVE_PHOTO_ERRORS,
  errors
}}

const removePhotoErrors = () => ({
  type: REMOVE_PHOTO_ERRORS
})

export const fetchPhotos = () => dispatch => {
  return APIUtil.fetchPhotos()
    .then(docs => {
      dispatch(receiveAllPhoto(docs))
    })
}

export const fetchPhoto = docId => dispatch => {
  return APIUtil.fetchPhoto(docId)
    .then(doc => dispatch(receivePhoto(doc)))
}

export const uploadPhoto = docData => dispatch => {
  return APIUtil.uploadPhoto(docData)
    .then(data => {
      dispatch(receivePhoto(data))
    })
    .catch(err => {
      dispatch(receivePhotoErrors(err.response.data))
    })
}

export const clearPhotoErrors = () => dispatch => {
  return dispatch(removePhotoErrors())
}