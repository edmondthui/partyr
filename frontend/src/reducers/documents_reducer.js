import { RECEIVE_DOCUMENT, RECEIVE_ALL_DOCUMENTS } from '../actions/document_actions';

const documentsReducer = (state={ all: {}, document: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALL_DOCUMENTS:
      newState.all = action.documents ? action.documents.data : {};
      return newState;
    case RECEIVE_DOCUMENT:
      newState.document = action.document.data;
      return newState;
    default:
      return state;
  }
}

export default documentsReducer;