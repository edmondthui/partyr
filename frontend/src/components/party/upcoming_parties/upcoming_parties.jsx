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
        <Map className="upparty" party={party}/>
          <div>
            <span className="party-info">Title: </span>
            <span className="party-res">{party.title}</span>
          </div>
          <div>
            <span className="party-info">Date: </span>
            <span className="party-res">{party.date}</span>
          </div>
          <div>
            <span className="party-info">Description: </span>
            <span className="party-res">{party.description}</span>
          </div>
          <div>
            <span className="party-info">No. of attendees: </span>
            <span className="party-res">{party.guests ? party.guests.length : 0}</span>
          </div>
          {/* <div>{party.items}</div> */}
          {/* <div>{party.lat}</div>
          <div>{party.lng}</div> */}
        </div>
    ))
    return(
      <div className="test">
        {upcomingParties}
      </div>
    )
  }

}

export default UpcomingParties;