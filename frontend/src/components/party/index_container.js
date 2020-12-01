import { connect } from 'react-redux';
import Index from './index'
// get parties

const mapStateToProps = state => ({
  parties: state.parties
})
const mapDispatchToProps = dispatch => ({
  // fetchParties: () => dispatch(fetchParties())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);