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
        <div className="propic"></div>
        <h1 className="username">{user.username}</h1>
        <h2 className="hosted">My Parties</h2>
        <h2 className="upcoming">Upcoming Parties</h2>
        <Link to="/new_party" className="new-party-btn">Host New Party</Link>
      </div>

      <div className="main-content">
        <Map />
        <PartyIndex />
      </div>

      <div className="right-sidebar">
        <Livechat />
      </div>
    </div>
    )
  }
}

export default Dashboard;
