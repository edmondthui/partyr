import { connect } from "react-redux";
import { fetchParties } from '../../../actions/party_actions';
import PartyIndex from "./party_index";

const mapStateToProps = (state) => {
  return {
    parties: Object.values(state.parties.all)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchParties: () => dispatch(fetchParties())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartyIndex);
