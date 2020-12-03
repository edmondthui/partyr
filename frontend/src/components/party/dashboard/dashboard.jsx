import React from "react";
import { Link } from 'react-router-dom';
import Livechat from '../../livechat/livechat_container';
import './dashboard.css';
import PartyIndex from '../index/party_index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: []
    }
    this.removeParty = this.removeParty.bind(this)
    this.joinParty = this.joinParty.bind(this)
  }

  componentDidMount() {
    this.props.fetchParties();
  }

  componentWillUnmount() {
    this.setState({
      parties: []
    })
  }

  componentDidUpdate(prevProps) {
    if( prevProps.parties !== this.props.parties ) {
      this.setState({parties: this.props.parties})
    }
  }

  removeParty() {
    let [, ...parties] = this.state.parties
    this.setState({
      parties: parties
    })
  }

  joinParty() {
    console.log("JOIN")
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
        <PartyIndex parties={this.state.parties}/>
        <div>
              <button onClick={this.removeParty}>X</button>
              <button onClick={this.joinParty}>YEEEEEEEEEEEET</button>
        </div>
      </div>

      <div className="right-sidebar">
        <Livechat party={this.state.parties.length > 0 ? this.state.parties[0] : []}/>
      </div>
    </div>
    )
  }
}

export default Dashboard;
