import React from "react";
import Livechat from '../livechat/livechat_container'
import './dashboard.css'

class Party extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchParties();
  }

  render() {
    let parties = this.props.parties.map((party) => (
      <div>
        <div>{party.title}</div>
        <div>{party.description}</div>
        <div>{party.items}</div>
        <div>{party.location}</div>
        <div>{party.guests}</div>
        <br/>
      </div>
    ));
    return (
    <div className="index-container">

      <div>
        <h1>OISFJOEIFJ</h1>
      </div>
      <div className="parties-index">
        {parties}
      </div>

      <div>
        <Livechat/>
      </div>
    
    </div>
    )
  }
}

export default Party;
