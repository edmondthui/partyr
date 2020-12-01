import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './partymap.css';

class PartyMap extends React.Component {

    render() {
      return (
        <div className="map-container" ref="map">
          Map
        </div>
      );
    }


}