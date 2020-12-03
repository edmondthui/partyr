import React from 'react';

class PartyIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: this.props.party
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.party !== this.props.party) {
      this.setState({party: this.props.party})
    }

  }

  render() {
    const { party } = this.state;
    const partyDate = new Date(party.date);
    // debugger
    return (
      <div className="party-index-item">
        <div className="party-title">{party.title}</div>
        <div className="party-date">{partyDate.toDateString()}</div>
        <div className="party-time">{partyDate.getHours()}:{partyDate.getMinutes()}</div>
        <div className="party-description">{party.description}</div>
        {/* <div>{party.items}</div> */}
        <div className="number-guest">
          {party.guests.length} {party.guests.length > 1 ? "guests are": "guest is"} joining
        </div>
        <br/>
      </div>
    )
  }
}

export default PartyIndexItem;