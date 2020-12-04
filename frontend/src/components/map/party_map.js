import React from "react";
import "./partymap.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class PartyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };

    this.mapStyles = {
      width: "600px",
      height: "400px",
    };
    this.containerStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
  }
  componentDidMount() {
    let mapOptions = {
      center: { lat: this.props.party.lat, lng: this.props.party.lng },
      zoom: 13,
    };
    this.setState({
      map: (
        <Map
          google={this.props.google}
          initialCenter={mapOptions.center}
          zoom={mapOptions.zoom}
          style={this.mapStyles}
          containerStyle={this.containerStyle}
        >
          {
            <Marker
              position={{
                lat: this.props.party.lat,
                lng: this.props.party.lng,
              }}
              text="Party Location"
            />
          }
        </Map>
      ),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let mapOptions = {
        center: { lat: this.props.party.lat, lng: this.props.party.lng },
        zoom: 13,
      };
      this.setState({
        map: (
          <Map
            google={this.props.google}
            center={mapOptions.center}
            zoom={mapOptions.zoom}
            style={this.mapStyles}
            containerStyle={this.containerStyle}
          >
            {
              <Marker
                position={{
                  lat: this.props.party.lat,
                  lng: this.props.party.lng,
                }}
                text="Party Location"
              />
            }
          </Map>
        ),
      });
      if (this.props.party.length === 0) {
        this.setState({ map: <div>OUT OF PARTIES</div> });
      }
    }
  }

  render() {
    return <div className="map-container">{this.state.map}</div>;
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(PartyMap);
