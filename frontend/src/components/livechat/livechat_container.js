import Livechat from './livechat'
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    users: state.users.all,
    party: state.parties.all[1] ? state.parties.all[1] : {}

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Livechat);