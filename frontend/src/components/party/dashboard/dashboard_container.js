import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchParties } from '../../../actions/party_actions';

const mapStateToProps = state => {
  return {
    parties: Object.values(state.parties.all)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchParties: () => dispatch(fetchParties())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);