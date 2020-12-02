import { RECEIVE_ALL_USERS } from '../actions/session_actions';


const usersReducer = (state={ all: {}, users: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALL_USERS:
      newState.all = action.users.data;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;