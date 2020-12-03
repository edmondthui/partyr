import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchParties, putParty } from '../../../actions/party_actions';
import { fetchDocuments } from '../../../actions/document_actions';

const mapStateToProps = state => {
  const user = state.session.user
  return {
    parties: Object.values(state.parties.all),
    user: state.session.user,
    documents: Object.values(state.documents.all)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchParties: () => dispatch(fetchParties()),
    putParty: (party)=> dispatch(putParty(party)),
    fetchDocuments: () => dispatch(fetchDocuments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);