import {
  RECEIVE_PHOTO_ERRORS,
  REMOVE_PHOTO_ERRORS
} from '../actions/photo_actions';

const PhotoErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors; 
    case REMOVE_PHOTO_ERRORS:
      return [];
    default:
      return oldState;
  }
};


export default PhotoErrorsReducer;