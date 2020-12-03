import * as APIUtil from '../util/document_api_utiil';

export const RECEIVE_DOCUMENT = "RECEIVE_DOCUMENT";
export const RECEIVE_ALL_DOCUMENTS = "RECEIVE_DOCUMENT";
export const RECEIVE_DOCUMENT_ERRORS = "RECEIVE_DOCUMENT_ERRORS";
export const REMOVE_DOCUMENT_ERRORS = "REMOVE_DOCUMENT_ERRORS";

const receiveDocument = document => {
  return {
  type: RECEIVE_DOCUMENT,
  document
}}

const receiveAllDocument = documents => ({
  type: RECEIVE_ALL_DOCUMENTS,
  documents
})

const receiveDocumentErrors = errors => {
  return {
  type: RECEIVE_DOCUMENT_ERRORS,
  errors
}}

const removeDocumentErrors = () => ({
  type: REMOVE_DOCUMENT_ERRORS
})

export const fetchDocuments = () => dispatch => {
  return APIUtil.fetchDocuments()
    .then(doc => dispatch(receiveAllDocument(doc)))
}

export const fetchDocument = docId => dispatch => {
  return APIUtil.fetchDocument(docId)
    .then(doc => dispatch(receiveDocument(doc)))
}

export const uploadDocument = docData => dispatch => {
  return APIUtil.uploadDocument(docData)
    .then(data => {
      dispatch(receiveDocument(data))
    })
    .catch(err => {
      dispatch(receiveDocumentErrors(err.response.data))
    })
}

export const clearDocumentErrors = () => dispatch => {
  return dispatch(removeDocumentErrors())
}