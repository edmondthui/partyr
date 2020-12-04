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
    let upcomingParties = parties.map(party => {
      const numberGuest = party.guests.length > 0 ? (
        `${party.guests.length} ${party.guests.length > 1 ? "guests are": "guest is"} joining this party`
      ) : (
        "No one is joining this party yet :("
      )
      const partyDate = new Date(party.date);
      
      return (
        <div className="party-card" style={{borderColor: `${party.color}`}}>
          <div>
            <Map party={party}/>
          </div>
          <div className="party-info-container">
            <div className="party-title">
              <p>{party.title}</p>
            </div>
            <div className="party-description">
              <p>{party.description}</p>
            </div>
            <div className="party-date">
              <div class="strong">Date: </div>
              <div>{partyDate.toDateString()}</div>
            </div>
            <div className="party-time">
              <div class="strong">Time: </div>
              <div>{partyDate.getHours() < 10 ? "0" : ""}{partyDate.getHours()}:{partyDate.getMinutes() < 10 ? "0" : ""}{partyDate.getMinutes()}</div>
            </div>
            <div className="number-guest">
              {numberGuest}
            </div>
          </div>
        </div>
      )
    })

    return(
      <div className="all-parties">
        <h1 className="page-title" style={{borderColor: `${this.props.user.color}`}}>{this.props.user.username}'s Upcoming Parties</h1>
        {upcomingParties}
      </div>
    )
  }

}

export default UpcomingParties;