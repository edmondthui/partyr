import React from "react";
import Livechat from '../../livechat/livechat_container'
import './dashboard.css'
import Map from '../../map/party_map'
import PartyIndex from '../index/party_index_container'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchParties();
  }

  render() {
    return (
    <div className="index-container">

      <div>
        <h1>John Johnson</h1>
      </div>

      <div className="parties-index">
        <Map />
        <PartyIndex />
      </div>
      <div className="livechat-container">
        <Livechat />
      </div>
    
    </div>
    )
  }
}

export default Dashboard;
