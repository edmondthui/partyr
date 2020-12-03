import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchParties, putParty } from '../../../actions/party_actions';
import { fetchPhotos } from '../../../actions/photo_actions';

const mapStateToProps = state => {
  return {
    parties: Object.values(state.parties.all),
    user: state.session.user,
    photos: Object.values(state.photos.all)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchParties: () => dispatch(fetchParties()),
    putParty: (party)=> dispatch(putParty(party)),
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);