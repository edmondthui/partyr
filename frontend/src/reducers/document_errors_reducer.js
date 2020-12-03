import {
  RECEIVE_DOCUMENT_ERRORS,
  REMOVE_DOCUMENT_ERRORS
} from '../actions/document_actions';

const documentErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_DOCUMENT_ERRORS:
      return action.errors; 
    case REMOVE_DOCUMENT_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default documentErrorsReducer;