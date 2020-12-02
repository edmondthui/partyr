import Livechat from './livechat'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  debugger;
  return {
    user: state.session.user,
    party: state.parties.all[1] ? state.parties.all[1] : {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Livechat);