import React from "react";
import Map from '../../map/party_map';
import './hosted_parties';

class HostedParties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: []
  }
}

  componentDidMount() {
    this.props.fetchParties();
  }

  componentWillUnmount() {
    this.setState({
      parties: []
    })
  }

  render() {
    let parties = this.props.parties.filter(party => party.host === this.props.user.id)
    let hostedParties = parties.map(party => {
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
              <span class="strong">Date: </span>
              <span>{partyDate.toDateString()}</span>
            </div>
            <div className="party-time">
              <span class="strong">Time: </span>
              <span>{partyDate.getHours() < 10 ? "0" : ""}{partyDate.getHours()}:{partyDate.getMinutes() < 10 ? "0" : ""}{partyDate.getMinutes()}</span>
            </div>
            <div className="number-guest">
              {numberGuest}
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="all-parties">
        <h1 className="page-title" style={{borderColor: `${this.props.user.color}`}}>Parties hosted by {this.props.user.username}</h1>
        {hostedParties}
      </div>
    )
  }
}

export default HostedParties;