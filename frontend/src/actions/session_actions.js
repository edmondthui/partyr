import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});
  
const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

const receiveUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const signup = user => dispatch => (
  APIUtil.signup(user).then(() => (
    dispatch(receiveUserSignIn())
  ), err => (
    dispatch(receiveSessionErrors(err.response.data))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded))
  })
  .catch(err => {
    dispatch(receiveSessionErrors(err.response.data))
  })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};

export const clearSessionErrors = () => dispatch => {
  return dispatch(removeSessionErrors())
};

export const fetchUsers = () => dispatch => {
  APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
}
