import React from 'react';
import PartyIndexItem from './party_index_item'

class PartyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      parties: []
    }
    this.removeParty = this.removeParty.bind(this)
    this.joinParty = this.joinParty.bind(this)
  }

  componentWillMount() {
    this.props.fetchParties()
  }

  componentDidUpdate(prevProps) {
    if( prevProps.parties !== this.props.parties ) {
      this.setState({parties: this.props.parties})
    }
  }

  componentWillUnmount() {
    this.setState({
      parties: []
    })
  }

  removeParty() {
    let [, ...parties] = this.state.parties
    this.setState({
      parties: parties
    })
  }

  joinParty() {
    console.log("JOIN")
  }

  render() {
    let parties = null;
    if (this.state.parties.length > 0) {
      parties = <div className="party-index">
        {this.state.parties.map((party,idx) => (
          <div>
            <PartyIndexItem party={party} key={idx}/>
            <div>
              <button onClick={this.removeParty}>X</button>
              <button onClick={this.joinParty}>YEEEEEEEEEEEET</button>
            </div>
          </div>
        ))}
      </div>
    }
    return (
      <div>
        {parties}
      </div>
    )
  }
}

export default PartyIndex;