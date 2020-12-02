import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="NavBarRight">
          <button onClick={this.logoutUser} className="logout">Logout</button>
        </div>
      );
    } else {
      return (
        <div className="NavBarRight">
          <Link to={'/login'} className="login">Login</Link>
          <Link to={'/signup'} className="signup">Signup</Link>
        </div>
      );
    }
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className='NavBarRGB'>
          <div></div>
          <h1 className="nav-h1">
            <Link to={'/'}>
              <div className="nav-letter">P</div>
              <div className="nav-letter2">A</div>
              <div className="nav-letter3">R</div>
              <div className="nav-letter">T</div>
              <div className="nav-letter2">Y</div>
              <div className="nav-letter">R</div>
              <div className="nav-letter4">!</div>
            </Link>
          </h1>
          { this.getLinks() }
        </div>
      );
    } else {
      return (
        <div className='NavBar'>
          <div></div>
          <h1><Link to={'/'}>Partyr</Link></h1>
          { this.getLinks() }
        </div>
      );
    }
  }
}

export default NavBar;