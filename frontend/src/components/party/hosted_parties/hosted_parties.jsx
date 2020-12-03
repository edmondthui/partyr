import React from "react";
import Map from '../../map/party_map';

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
    debugger;
    let parties = this.props.parties.filter(party => party.hostId === this.props.user.id)
    debugger;
    let hostedParties = parties.map(party => (
        <div>
          <Map party={party}/>
          <div>{party.title}</div>
          <div>{party.date}</div>
          <div>{party.description}</div>
          {/* <div>{party.items}</div> */}
          <div>{party.lat}</div>
          <div>{party.lng}</div>
          <div>{party.guests ? party.guests.length : 0}</div>
        </div>
    ))
      return (
        <div>
          {hostedParties}
        </div>
      )
  }
}

export default HostedParties;