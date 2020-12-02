import { connect } from "react-redux";
import { fetchParties } from '../../actions/party_actions';
import Parties from "./parties";

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

export default connect(mapStateToProps, mapDispatchToProps)(Parties);
