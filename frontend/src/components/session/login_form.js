import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
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
        <div className="login-form session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form">
            <h2>Welcome Back</h2>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);