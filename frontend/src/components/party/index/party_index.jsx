import React from 'react';
import PartyIndexItem from './party_index_item'

class PartyIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchParties()
  }


  render() {
    return (
      <div className="party-index">
        {this.props.parties.map((party,idx) => (
          <PartyIndexItem party={party} key={idx}/>
        ))}
      </div>
    )
  }
}

export default PartyIndex;