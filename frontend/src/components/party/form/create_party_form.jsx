import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { ReturnToDashboard } from '../../nav/return_dashboard';

class CreatePartyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: this.props.user.id,
      title: '',
      description: '',
      date: '',
      lat: '',
      lng: '',
      items: '',
      map: null,
      marker: null
    }

    this.mapStyles = {
      width: "500px",
      height: "400px",
    }

    this.containerStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this)
  }

  componentWillMount() {
    const geolocation = navigator.geolocation;

    let mapOptions = {
      center: { lat: 37.7758, lng: -122.435},
      zoom: 13
    }

    navigator.permissions && navigator.permissions.query({name: 'geolocation'}).then(PermissionStatus => {
      if (PermissionStatus.state === "granted") {
        geolocation.getCurrentPosition(position => {
          mapOptions = {
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            zoom: 13
          }
          this.setState({ map: <Map google={this.props.google} initialCenter={mapOptions.center} zoom={mapOptions.zoom} style={this.mapStyles} containerStyle={this.containerStyle} onClick={this.handleMapClick}></Map> })
        })
      } else {
        this.setState({ map: <Map google={this.props.google} initialCenter={mapOptions.center} zoom={mapOptions.zoom} style={this.mapStyles} containerStyle={this.containerStyle} onClick={this.handleMapClick}></Map> })
      }
    })

  }

  handleMapClick(e, map, coord) {
    let lat = coord.latLng.lat();
    let lng = coord.latLng.lng();
    let marker = <Marker position={{lat: lat, lng: lng}} text="Party Location"/>
    this.setState({
      lat: lat,
      lng: lng,
      map: <Map google={this.props.google} center={{lat: lat, lng: lng}} style={this.mapStyles} containerStyle={this.containerStyle} onClick={this.handleMapClick}>{marker}</Map>
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let party = {
      host: this.state.host,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      lat: this.state.lat,
      lng: this.state.lng,
    }
    this.props.createParty(party).then(response => {
      if (!response) {
        this.props.history.push("/dashboard")
      }
    });
  }

  componentWillUnmount() {
    this.props.clearPartyErrors();
  }

  renderErrors() {
    return(
      <ul className="errors">
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const party = this.state;

    return (
      <div className = "errors-container">
        <ReturnToDashboard />
        <div className="party-form-container">
          <div className="map-container">
            {this.state.map}
          </div>
          <form className="party-form" onSubmit={this.handleSubmit}>
            <h1 className="party-form-title">Create a party</h1>
            <div className="title">
              <div className="input-wrapper">
                <label htmlFor="input-title">Title</label>
                <input 
                  type="text"
                  id="input-title"
                  value={party.title}
                  onChange={this.update('title')} />
              </div>
            </div>
            <div className="description">
              <div className="input-wrapper">
                <label htmlFor="input-description">Description</label>
                <textarea 
                  id="input-description"
                  value={party.description}
                  onChange={this.update('description')} />
              </div>
            </div>
            <div className="date">
              <div className="input-wrapper">
                <label htmlFor="input-date">Date and Time</label>
                <input 
                  type="datetime-local"
                  id="input-date"
                  value={party.date}
                  onChange={this.update('date')} />
              </div>
            </div>
            <div className="location">
              <h3>Please pick the location on the map</h3>
              <div className="input-wrapper">
                <label>Latitude:
                  <input type="text" value={this.state.lat} onChange={this.update("lat")} disabled />
                </label>
                </div>
              <div className="input-wrapper">
                <label>Longitude:
                  <input type="text" value={this.state.lng} onChange={this.update("lng")} disabled />
                </label>
              </div>
            </div>
            <button className="submit-btn">Create Party!</button>
          </form>
        </div>
        {this.renderErrors()}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(CreatePartyForm);