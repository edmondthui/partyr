import Livechat from './livechat'
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.user,
    users: state.users.all,
    party: ownProps.party
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Livechat);