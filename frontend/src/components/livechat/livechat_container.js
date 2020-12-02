import Livechat from './livechat'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  debugger
  return {
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Livechat);