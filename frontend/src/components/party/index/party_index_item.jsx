import React from 'react';

class PartyIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { party } = this.props;
    // debugger;
    return (
      <div className="party-index-item">
        <div>{party.title}</div>
        <div>{party.date}</div>
        <div>{party.description}</div>
        {/* <div>{party.items}</div> */}
        <div>{party.lat}</div>
        <div>{party.lng}</div>
        {/* <div>{party.guests}</div> */}
        <br/>
      </div>
    )
  }
}

export default PartyIndexItem;