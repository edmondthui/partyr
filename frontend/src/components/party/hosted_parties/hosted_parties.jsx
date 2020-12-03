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
      const partyDate = new Date(party.date);
      return (
        <div className="party-card">
          <div>
            <Map party={party}/>
          </div>
          <div className="party-info-container">
            <div>
              <span className="party-title">{party.title}</span>
            </div>
            <div>
              <span className="party-info">Description: </span>
              <span className="party-description">{party.description}</span>
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
      return (
        <div className="all-parties">
          {hostedParties}
        </div>
      )
  }
}

export default HostedParties;