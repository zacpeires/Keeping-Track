import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store';
import { LoginForm } from '../components'

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div className="login-page">
        <section className="login-page__section--left">

        </section>
        <section className="login-page__section--right">
        <div className="login-page__content">
        <LoginForm handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
        />
        <div className="new-account">
          <p className="new-account__text">
            Create a new account and
            <br />
            track your goals
          </p>

        </div>
        </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: userDetails => dispatch(login(userDetails))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
