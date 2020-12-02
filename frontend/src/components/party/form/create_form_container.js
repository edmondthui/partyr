import { connect } from 'react-redux';
import { createParty, clearPartyErrors } from '../../../actions/party_actions';
import CreatePartyForm from './create_party_form';

const mapStateToProps = (state, { location }) => {
  return {
    errors: state.errors.party,
    user: state.session.user,
    party: {
      host: '', //id of the user
      title: '',
      description: '',
      date: '',
      lat: new URLSearchParams(location.search).get("lat"), 
      lng: new URLSearchParams(location.search).get("lng"), 
      items: ''
    }
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