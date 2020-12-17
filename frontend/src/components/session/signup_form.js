import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const faker = require('faker');

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignup = this.demoSignup.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoSignup(e) {
    e.preventDefault();
    let password = faker.internet.password();
    let user = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: password,
      password2: password
    }

    this.props.signup(user).then(() => this.props.login(user));
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user).then((response) => {
      if (response.type === "RECEIVE_USER_SIGN_IN") {
        this.props.login(user)
      }
    });
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    return(
      <ul className="errors">
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="gradient-bg">
        <div className="signup-form session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form">
            <h2>Hello Sunshine</h2>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            <input type="submit" value="Submit" />
            <button onClick={this.demoSignup} className="demo-btn">Demo Sign Up</button>
            <p class="change-form">Already have an account? <Link to="/login">Log in</Link> here</p>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);