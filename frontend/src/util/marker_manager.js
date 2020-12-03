class MarkerManager{
  constructor(map, handleClick){
    this.maps = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(parties){
    const partiesObj = {};
    parties.forEach(party => partiesObj[party.id] = party);

    parties
      .filter(party => !this.markers[party.id])
      .forEach(newParty => this.createMarkerFromParty(newParty, this.handleClick))

      Object.keys(this.markers)
        .filter(partyId => !partiesObj[partyId])
        .forEach((partyId) => this.removeMarker(this.markers[partyId]))
  }

  createMarkerFromParty(party){
    const position = new google.maps.LatLng(party.lat, party.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      partyId: party.id
    });

    marker.addListener('click', () => this.handleClick(party));
    this.markers[marker.partyId] = marker;
  }

  removeMarker(marker){
    this.markers[marker.partyId].setMap(null);
    delete this.markers[marker.partyId];
  }
}

export default MarkerManager;