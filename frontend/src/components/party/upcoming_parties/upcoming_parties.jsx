import React from 'react'
import Map from '../../map/party_map';
import './upcoming_parties.css'
import Livechat from '../../livechat/livechat_container';

class UpcomingParties extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parties: []
    }
  }

  componentDidMount() {
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
        <div className="party-card" key={party.id} style={{borderColor: `${party.color}`}}>
          <div className="map-and-info">
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
                <div className="strong">Date: </div>
                <div>{partyDate.toDateString()}</div>
              </div>
              <div className="party-time">
                <div className="strong">Time: </div>
                <div>{partyDate.getHours() < 10 ? "0" : ""}{partyDate.getHours()}:{partyDate.getMinutes() < 10 ? "0" : ""}{partyDate.getMinutes()}</div>
              </div>
              <div className="number-guest">
                {numberGuest}
              </div>
            </div>
          </div>
          <Livechat party={party} scroll={false}/>
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