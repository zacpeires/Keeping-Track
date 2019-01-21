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
        <div className="header__outer-navbar">
        <h1>Keeping Track</h1>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Goals
          </li>
        </ul>
        </div>
        <div className="header__inner-navbar">
        <ul>
          {/* change Lis for ps, in order to animate height and color on hover - may have to use an after that comes up from the bottom.
          UL becomes div in css and LI beomes p */}
          <li>
            Progress and Achievements
          </li>
          <li>
            Tasks
          </li>
        </ul>
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
