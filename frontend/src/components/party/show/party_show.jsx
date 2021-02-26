import React from 'react';
import { withRouter } from 'react-router-dom'
import Map from '../../map/party_map';

class PartyShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchParty(this.props.match.params.partyId)
  }

  render() {
    const party = this.props.party
    return (
      <div>
        <Map party={party}/>
        <div>{party.title}</div>
        <div>{party.date}</div>
        <div>{party.description}</div>
        <div>{party.lat}</div>
        <div>{party.lng}</div>
        <div>{party.guests ? party.guests.length : 0}</div>
      </div>
    )
  }
}

export default withRouter(PartyShow);