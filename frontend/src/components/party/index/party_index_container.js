import { connect } from "react-redux";
import { fetchParties, putParty } from '../../../actions/party_actions';
import PartyIndex from "./party_index";

const mapStateToProps = (state) => {
  return {
    parties: Object.values(state.parties.all)
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
  fetchParties: () => dispatch(fetchParties()),
  putParty: (party)=> dispatch(putParty(party))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartyIndex);
