import React from 'react';
import { Link } from 'react-router-dom'
import './splash.css';

class Splash extends React.Component {

  render() {
    return (
      <div className="gradient-bg">
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