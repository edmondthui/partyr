import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchParties, putParty } from '../../../actions/party_actions';

const mapStateToProps = state => {
  return {
    parties: Object.values(state.parties.all),
    user: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchParties: () => dispatch(fetchParties()),
    putParty: (party)=> dispatch(putParty(party))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);