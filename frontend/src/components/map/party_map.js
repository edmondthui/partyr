import React from 'react';
import './partymap.css';
import {Map, GoogleApiWrapper} from 'google-maps-react';
const keys = require("../../config/keys.js")

class PartyMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }
    const mapStyles = {
      width: "500px",
      height: "500px",
    }

    const containerStyle = {
      position: 'relative',  
      width: '100%',
      height: '100%'
    }

    this.map = <Map google={this.props.google} initialCenter={mapOptions.center} zoom={mapOptions.zoom} style={mapStyles} containerStyle={containerStyle}></Map>
  }
  render() {
    return (
      <div className="map-container">
        {this.map}
      </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: keys.mapsApiKey
})(PartyMap);