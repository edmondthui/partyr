import { connect } from 'react-redux';
import { fetchParty } from "../../../actions/party_actions"
import PartyShow from './party_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    party: state.parties[ownProps.match.params.partyId]
  });
}

const mapDispatchToProps = dispatch => ({
  fetchParty: (id) => dispatch(fetchParty(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PartyShow);