import React from "react";
import { Link } from 'react-router-dom';
import Livechat from '../../livechat/livechat_container';
import './dashboard.css';
import Map from '../../map/party_map';
import PartyIndex from '../index/party_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchParties();
  }

  render() {
    const { user } = this.props;

    return (
    <div className="dashboard-container">

      <div className="left-sidebar">
        <p>{user.username}</p>
        <h1>Upcoming Parties</h1>
        <Link to="/new_party">Host New Party</Link>
      </div>

      <div className="main-content">
        <Map />
        <PartyIndex />
      </div>
      <div className="right-sidebar">
        <div className="livechat-container">
          <Livechat />
        </div>
      </div>
    
    </div>
    )
  }
}

export default Dashboard;
