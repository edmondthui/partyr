import { connect } from 'react-redux';
import { createParty, clearPartyErrors } from '../../../actions/party_actions';
import CreatePartyForm from './create_party_form';

const mapStateToProps = (state, { location }) => {
  return {
    errors: state.errors.party,
    user: state.session.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createParty: party => dispatch(createParty(party)),
    clearPartyErrors: () => dispatch(clearPartyErrors())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(CreatePartyForm);