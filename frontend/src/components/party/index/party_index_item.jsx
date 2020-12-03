import React from 'react';

class PartyIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: this.props.party
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.party != this.props.party) {
      this.setState({party: this.props.party})
    }

  }

  render() {
    return (
      <div className="party-index-item">
        <div>{this.state.party.title}</div>
        <div>{this.state.party.date}</div>
        <div>{this.state.party.description}</div>
        {/* <div>{party.items}</div> */}
        <div>{this.state.party.lat}</div>
        <div>{this.state.party.lng}</div>
        <div>{this.state.party.guests.length}</div>
        <br/>
      </div>
    )
  }
}

export default PartyIndexItem;