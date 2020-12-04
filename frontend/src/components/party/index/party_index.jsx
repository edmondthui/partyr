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
      this.setState({parties: [, ...this.state.parties]})
    }
    else {
      this.props.removeParty()
      this.setState({parties: [, ...this.state.parties]})
    }
  }

  componentDidUpdate(prevProps) {
    if( prevProps !== this.props ) {
      this.setState({parties: this.props.parties})
    }
  }

  componentWillUnmount() {
    this.setState({parties: []})
  }

  render() {
    let parties = null
    parties = (
      <div className="party-index">
        {this.state.parties.map((party, idx) => (
          <TinderCard onSwipe={this.onSwipe} >
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