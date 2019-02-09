import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store';
import { LoginPage } from '../components'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <header>
        <nav className="header__navbar">
        <div className="header__outer--navbar">
        <h1>Keeping Track</h1>
          <p>
            Home
          </p>
          <p>
            About
          </p>
          <p>
            Goals
          </p>
        </div>
        <div className="header__inner--navbar">
          <p>
            Calendar
          </p>
          <p>
            Tasks
          </p>
          <p>
            Summary
          </p>
        </div>
          {/* {this.props.isLoggedIn ? <div /> :
          <div />
        } */}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
