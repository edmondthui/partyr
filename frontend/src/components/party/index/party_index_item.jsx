import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
import { Link } from 'react-router-dom';

class PartyIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: this.props.party
    }

    this.mapStyles = {
      width: "350px",
      height: "250px",
    }

    this.containerStyle = {
      position: 'relative',  
      width: '100%',
      height: '100%',
    }
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: this.props.party.lat, lng: this.props.party.lng},
      zoom: 13
    }

  this.setState({ map: (
    <Map google={this.props.google} 
      initialCenter={mapOptions.center} 
      zoom={mapOptions.zoom} 
      style={this.mapStyles} 
      containerStyle={this.containerStyle}>
      {<Marker position={{
        lat: this.props.party.lat, 
        lng: this.props.party.lng
      }} 
      text="Party Location"/>}
    </Map> )})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.party !== this.props.party) {
      let mapOptions = {
        center: { lat: this.props.party.lat, lng: this.props.party.lng},
        zoom: 13
      }
      this.setState({ map: (
        <Map google={this.props.google} 
          center={mapOptions.center} 
          zoom={mapOptions.zoom} 
          style={this.mapStyles} 
          containerStyle={this.containerStyle}>
          {<Marker position={{
            lat: this.props.party.lat, 
            lng: this.props.party.lng
          }} 
          text="Party Location"/>}
          </Map> ), party: this.props.party})
      if (this.props.party.length === 0) {
        this.setState({ map: (
          <div>
            <p>Out of parties :(</p>
            <Link to="/new_party">Why not host a new one?</Link>
          </div>
        )})
      }
      // this.setState({party: this.props.party})
    }

  }

  render() {
    const { party } = this.state;
    const partyDate = new Date(party.date);

    const numberGuest = party.guests.length > 0 ? (
      `${party.guests.length} ${party.guests.length > 1 ? "guests are": "guest is"} joining this party`
    ) : (
      "No one is joining this party yet :("
    )

    return (
      <div className="party-index-item" style={{borderColor: `${party.color}`}}>
        <div className="triangle" ></div>        
        <div className="party-title">
          <p>{party.title}</p>
        </div>
        <div className="party-index-map-container">
          {this.state.map}
        </div>
        <div className="party-date">
          <div class="strong">Date: </div>
          <div>{partyDate.toDateString()}</div>
        </div>
        <div className="party-time">
          <div class="strong">Time: </div>
          <div>{partyDate.getHours() < 10 ? "0" : ""}{partyDate.getHours()}:{partyDate.getMinutes() < 10 ? "0" : ""}{partyDate.getMinutes()}</div>
        </div>
        <div className="party-description">
          {party.description}
        </div>
        <div className="number-guest">
          {numberGuest}
        </div>
        <br/>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(PartyIndexItem);