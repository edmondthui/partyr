import React from 'react';
import PartyIndexItem from './party_index_item'
import './party_index.css';
import TinderCard from 'react-tinder-card'

class PartyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      parties: []
    }
    this.onSwipe = this.onSwipe.bind(this)
  }

  onSwipe(direction) {
    if (direction === "right") {
      this.props.joinParty()
    }
    else {
      this.props.removeParty()
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
          <TinderCard onSwipe={this.onSwipe} onCardLeftScreen={() => console.log("hi")} >
            <PartyIndexItem party={party} key={`item-${idx}`}/>
          </TinderCard>
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