import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createUser} from '../store'


class SignupForm extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.createUser({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    return (
      <section className="signup-form">
        <form className="signup-form__form" onSubmit={this.handleSubmit}>
          <input
          className="signup-form__input"
          name="name"
          value={this.state.name}
          type="text"
          onChange={this.handleChange}

          />
          <input
          className="signup-form__input"
          name="email"
          value={this.state.email}
          type="text"
          onChange={this.handleChange}
          />
          <button type="submit">
            Sign Up
          </button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: userDetails => dispatch(createUser(userDetails))
})

export default connect(null, mapDispatchToProps)(SignupForm)
