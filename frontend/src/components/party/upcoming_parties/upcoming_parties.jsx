import React from 'react'
import Map from '../../map/party_map';

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
    return(
      <div>
        {upcomingParties}
      </div>
    )
  }

}

export default UpcomingParties;