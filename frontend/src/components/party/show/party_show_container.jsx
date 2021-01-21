import { connect } from 'react-redux';
import { fetchParty } from '../../../actions/party_actions';
import PartyShow from './party_show';

const mapStateToProps = (state) => {
  return ({
    party: state.parties.party
  });
}

const mapDispatchToProps = dispatch => ({
  fetchParty: (id) => dispatch(fetchParty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PartyShow);