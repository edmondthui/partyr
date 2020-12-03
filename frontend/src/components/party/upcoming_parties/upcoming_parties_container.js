import { connect } from "react-redux";
import { fetchParties } from "../../../actions/party_actions";
import UpcomingParties from "./upcoming_parties";

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

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingParties);
