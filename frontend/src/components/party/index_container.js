import { connect } from 'react-redux';
import Index from './index';
import { fetchParties } from '../../actions/party_actions';

const mapStateToProps = state => {
  debugger;
  return {
    parties: Object.values(state.parties.all)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchParties: () => dispatch(fetchParties())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);