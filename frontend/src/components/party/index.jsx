import React from "react";
import Livechat from '../livechat/livechat_container'
import './dashboard.css'
import Map from '../map/party_map'

class Party extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchParties();
  }

  render() {
    let parties = this.props.parties.map((party) => (
      <div>
        <div>{party.title}</div>
        <div>{party.description}</div>
        <div>{party.items}</div>
        <div>{party.location}</div>
        <div>{party.guests}</div>
        <br/>
      </div>
    ));
    return (
    <div className="index-container">

      <div>
        <h1>John Johnson</h1>
      </div>

      <div className="parties-index">
        <Map />
        {parties}
      </div>
      <div className="livechat-container">
        <Livechat />
      </div>
    
    </div>
    )
  }
}

export default Party;
