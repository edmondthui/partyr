import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './partymap.css';
import {Map, GoogleApiWrapper} from 'google-maps-react';
const keys = require("../../config/keys.js")

class PartyMap extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      map: null
    }
  }
  componentDidMount() {

    const geolocation = navigator.geolocation;

    let mapOptions = {
      center: { lat: 37.7758, lng: -122.435},
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

    if (geolocation) {
      geolocation.getCurrentPosition(position => {
        mapOptions = {
          center: {lat: position.coords.latitude, lng: position.coords.longitude},
          zoom: 13
        }
        this.setState({ map: <Map google={this.props.google} initialCenter={mapOptions.center} zoom={mapOptions.zoom} style={mapStyles} containerStyle={containerStyle} onClick={this.handleClick}></Map> })
      })
    } else {
      this.setState({ map: <Map google={this.props.google} initialCenter={mapOptions.center} zoom={mapOptions.zoom} style={mapStyles} containerStyle={containerStyle} onClick={this.handleClick}></Map> })
    }
  }
  render() {
    return (
      <div className="map-container">
        {this.state.map}
      </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: keys.mapsApiKey
})(PartyMap)