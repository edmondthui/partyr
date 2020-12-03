import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';

const PhotosReducer = (state={ all: {}, photo: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALL_PHOTOS:
      newState.all = action.photos ? action.photos.data : {};
      return newState;
    case RECEIVE_PHOTO:
      newState.photo = action.photo.data;
      return newState;
    default:
      return state;
  }
}

export default PhotosReducer;