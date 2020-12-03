import React from 'react';
import PartyIndexItem from './party_index_item'
import PartyIndexMap from './party_index_map';
import './party_index.css';

class PartyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      parties: []
    }
  }

  componentDidUpdate(prevProps) {
    if( prevProps.parties !== this.props.parties ) {
      this.setState({parties: this.props.parties})
    }
  }

  render() {
    let parties = null;
    let map = null;

    parties = (
      <div className="party-index">
        {this.state.parties.map((party, idx) => (
          <PartyIndexItem party={party} key={`item-${idx}`}/>
        ))}
      </div>
    );

    map = <PartyIndexMap party={this.state.parties.length > 0 ? this.state.parties[0] : []}/>;
    
    return (
      <div className="party-index-container">
        {parties}
      </div>
    )
  }
}

export default PartyIndex;