import { connect } from "react-redux";
import HostedParties from "./hosted-parties";
import { fetchParties } from "../../../actions/party_actions";

const mapStateToProps = (state) => {
  return {
    parties: Object.values(state.parties.all),
    user: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchParties: () => dispatch(fetchParties()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HostedParties);
