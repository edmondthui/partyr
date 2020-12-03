import Livechat from './livechat'
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    user: state.session.user,
    users: state.users.all,
    // party: state.parties.all[0] ? state.parties.all[0] : {},
    party: ownProps.party

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Livechat);