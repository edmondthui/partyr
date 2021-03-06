import React from 'react';
import { Link } from 'react-router-dom'

class Splash extends React.Component {

  render() {
    return (
      <div className="gradient-bg">
        <img className="parrot" src="https://emojis.slackmojis.com/emojis/images/1583350348/7963/mask-parrot.gif?1583350348" alt=""></img>
        <h1>Never have an unorganized party again.</h1>
        <p>With Partyr, you can organize parties, 
          <br />
          work events, and social gatherings with stress-free planning.
          <br />
          Let us do the planning and you do the partying.
        </p>
        {/* <button className="cta-btn">Join Now</button> */}
        <div className="button-container">
          <Link to={'/signup'} className="cta-btn">Join Now</Link>
          </div>
          
      </div>
    );
  }
}

export default Splash;
