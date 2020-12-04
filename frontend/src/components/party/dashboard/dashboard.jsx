import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';

import Livechat from '../../livechat/livechat_container';
import './dashboard.css';
import PartyIndex from '../index/party_index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    }
    this.removeParty = this.removeParty.bind(this);
    this.joinParty = this.joinParty.bind(this);
    this.showPic = this.showPic.bind(this);
  }

  componentDidMount() {
    this.props.fetchParties();
    this.props.fetchPhotos();
  }

  componentWillUnmount() {
    this.setState({
      parties: []
    })
  }

  componentDidUpdate(prevProps) {
    if( prevProps !== this.props) {
      let unjoinedParties = this.props.parties.filter(party => !party.guests.includes(this.props.user.id))
      this.setState({ parties: unjoinedParties })
    }
  }

  removeParty() {
    let [, ...parties] = this.state.parties;
    this.setState({
      parties: parties
    })
  }

  joinParty() {
    if (this.state.parties.length > 0) {
      let joinParty = this.state.parties[0];
      let party = {
        id: joinParty._id,
        guests: joinParty.guests.length > 0 ? (joinParty.guests.includes(this.props.user.id) ? joinParty.guests : joinParty.guests.concat(this.props.user.id)) : [this.props.user.id],
        title: joinParty.title,
        description: joinParty.description,
        date: joinParty.date
      }
      this.props.putParty(party);
      this.props.fetchParties();
    }
  }

  showPic() {
    const user = this.props.user
    const photoObj = this.props.photos.filter(doc => doc.uploader === user.id)[0]
    if (!photoObj) return null
    const photo = photoObj.fileLink; 
    return (
      <img className="uploaded-pic" src={photo} alt="profile-pic"/>
    )
  }

  render() {
    const { user } = this.props;
    return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <h1 className="username">
          Hello!<br />
          {user.username}
        </h1>
        <div className="propic">
          {this.props.photos.length>0 ? this.showPic() : null}
        </div>
        <Link to="/upload-pic" className="upload-link">Upload Profile Pic</Link>
        <Link to="/hosted-parties" className="hosted">Hosted Parties</Link>
        <Link to="/upcoming-parties" className="upcoming">Upcoming Parties</Link>
        <Link to="/new_party" className="new-party-btn">Host New Party</Link>
      </div>

      <div className="main-content">
        <PartyIndex parties={this.state.parties} joinParty={this.joinParty} removeParty={this.removeParty}/>
        <div className="party-btn-container">
          <button className="party-btn decline-btn"onClick={this.removeParty}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button className="party-btn join-btn"onClick={this.joinParty}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
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
