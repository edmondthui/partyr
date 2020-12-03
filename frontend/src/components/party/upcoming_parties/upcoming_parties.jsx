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
      const partyDate = new Date(party.date);
      return (
        <div className="party-card">
          <div>
            <Map party={party}/>
          </div>
          <div className="party-info-container">
            <div>
              <p className="party-title">{party.title}</p>
            </div>
            <div>
              <p className="party-description">{party.description}</p>
            </div>
            <div>
              <span>Date: </span>
              <span>{partyDate.toDateString()}</span>
            </div>
            <div>
              <span>Time: </span>
              <span>{partyDate.getHours() < 10 ? "0" : ""}{partyDate.getHours()}:{partyDate.getMinutes() < 10 ? "0" : ""}{partyDate.getMinutes()}</span>
            </div>
            <div>
              {party.guests.length} {party.guests.length > 1 ? "guests are": "guest is"} joining
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="all-parties">
        {upcomingParties}
      </div>
    )
  }

}

export default UpcomingParties;