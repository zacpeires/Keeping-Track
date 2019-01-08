import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store';

class SignupForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      secondName: '',
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

    console.log(this.state.email)

    this.props.createUser({
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <section className="signup-form">
        <form className="signup-form__form" onSubmit={this.handleSubmit}>
        <div className="signup-form__input--names">
          <input
            className="signup-form__input signup-form__input--first-name"
            name="firstName"
            value={this.state.firstName}
            type="text"
            onChange={this.handleChange}
            placeholder="First name"
          />
          <input
            className="signup-form__input signup-form__input--second-name"
            name="secondName"
            value={this.state.secondName}
            type="text"
            onChange={this.handleChange}
            placeholder="Surname"
          />
          </div>

          <input
            className="signup-form__input  signup-form__input--email"
            name="email"
            value={this.state.email}
            type="text"
            onChange={this.handleChange}
            placeholder="Email address"
          />
          <input
            className="signup-form__input  signup-form__input--password"
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
            placeholder="New password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: userDetails => dispatch(createUser(userDetails))
});

export default connect(
  null,
  mapDispatchToProps
)(SignupForm);
