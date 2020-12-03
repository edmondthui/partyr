import React from 'react';
import PartyIndexItem from './party_index_item'
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

    parties = (
      <div className="party-index">
        {this.state.parties.map((party, idx) => (
          <PartyIndexItem party={party} key={`item-${idx}`}/>
        ))}
      </div>
    );
    
    return (
      <div className="party-index-container">
        {parties}
      </div>
    )
  }
}

export default PartyIndex;