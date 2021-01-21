import React from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <button onClick={this.logoutUser} className="logout">
            Log Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="NavBarRight">
          <Link to={"/login"} className="login">
            Log In
          </Link>
          <Link to={"/signup"} className="signup">
            Sign Up
          </Link>
        </div>
      );
    }
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="NavBarRGB">
          <div>
            <a
              href="https://github.com/edmondthui/partyr"
              className="github-link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <Link to="/developers" className="developers-link">
              <FontAwesomeIcon icon={faUsers} />
            </Link>
          </div>
          <h1 className="nav-h1">
            <Link to={"/"}>
              <div className="nav-letter">P</div>
              <div className="nav-letter2">A</div>
              <div className="nav-letter3">R</div>
              <div className="nav-letter">T</div>
              <div className="nav-letter2">Y</div>
              <div className="nav-letter">R</div>
              <div className="nav-letter4">!</div>
            </Link>
          </h1>
          {this.getLinks()}
        </div>
      );
    } else {
      return (
        <div className="NavBar">
          <div>
            <a
              href="https://github.com/edmondthui/partyr"
              className="github-link logged-out"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <Link to="/developers" className="developers-link logged-out">
              <FontAwesomeIcon icon={faUsers} />
            </Link>
          </div>

          <h1>
            <Link to={"/"}>Partyr</Link>
          </h1>

          {this.getLinks()}
        </div>
      );
    }
  }
}

export default NavBar;
