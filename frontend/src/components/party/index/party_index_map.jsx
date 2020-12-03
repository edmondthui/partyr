import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../map/partymap.css';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// const keys = require("../../../config/keys.js")

class PartyIndexMap extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      map: null
    }

    // this.mapStyles = {
    //   width: "350px",
    //   height: "200px",
    // }

    // this.containerStyle = {
    //   position: 'relative',  
    //   width: '100%',
    //   height: '100%',
      // top: '50%',
      // left: '50%',
      // transform: 'translate(-25%, -25%)'
    // }
  }
  // componentDidMount() {
  //   let mapOptions = {
  //     center: { lat: this.props.party.lat, lng: this.props.party.lng},
  //     zoom: 13
  //   }

  // this.setState({ map: (
  //   <Map google={this.props.google} 
  //     initialCenter={mapOptions.center} 
  //     zoom={mapOptions.zoom} 
  //     style={this.mapStyles} 
  //     containerStyle={this.containerStyle}>
  //     {<Marker position={{
  //       lat: this.props.party.lat, 
  //       lng: this.props.party.lng
  //     }} 
  //     text="Party Location"/>}
  //   </Map> )})
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.party !== this.props.party) {
  //     let mapOptions = {
  //       center: { lat: this.props.party.lat, lng: this.props.party.lng},
  //       zoom: 13
  //     }
  //     this.setState({ map: (
  //       <Map google={this.props.google} 
  //         center={mapOptions.center} 
  //         zoom={mapOptions.zoom} 
  //         style={this.mapStyles} 
  //         containerStyle={this.containerStyle}>
  //         {<Marker position={{
  //           lat: this.props.party.lat, 
  //           lng: this.props.party.lng
  //         }} 
  //         text="Party Location"/>}
  //         </Map> )})
  //     if (this.props.party.length === 0) {
  //       this.setState({ map: (
  //         <div>
  //           <p>Out of parties :(</p>
  //           <Link to="/new_party">Why not host a new one?</Link>
  //         </div>
  //       )})
  //     }
  //   }
  // }

  render() {
    return (
      <div className="map-container">
        {this.state.map}
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: keys.mapsApiKey
// })(PartyIndexMap);

export default PartyIndexMap;