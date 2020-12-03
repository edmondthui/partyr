import React from 'react'
import Map from '../../map/party_map';
import './upcoming_parties.css'

class UpcomingParties extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parties: []
    }
  }

  componentWillMount() {
    this.props.fetchParties()
  }

  render() {
    let parties = this.props.parties.filter(party => party.guests.includes(this.props.user.id));
    let upcomingParties = parties.map(party => (
      <div className="party-card">
        <Map party={party}/>
          <div>Title: {party.title}</div>
          <div>Date: {party.date}</div>
          <div>Description: {party.description}</div>
          {/* <div>{party.items}</div> */}
          {/* <div>{party.lat}</div>
          <div>{party.lng}</div> */}
          <div>No. of attendees: {party.guests ? party.guests.length : 0}</div>
        </div>
    ))
    return(
      <div>
        {upcomingParties}
      </div>
    )
  }

}

export default UpcomingParties;