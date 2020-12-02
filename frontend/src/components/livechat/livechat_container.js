import Livechat from './livechat'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  debugger;
  return {
    user: state.session.user,
    party: state.parties.all[0] ? state.parties.all[0] : {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Livechat);