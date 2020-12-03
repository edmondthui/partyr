import React from 'react';

class PartyShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const party = this.props.party
    return (
      <div>
        {party.title}
        {party.description}
        {party.date}
        {party.host}
      </div>
    )
  }
}

export default PartyShow;