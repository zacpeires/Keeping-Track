import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store';
import { LoginPage } from '../components'

class Navbar extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <header>
        <nav className="header__navbar">
          {this.props.isLoggedIn ? <div /> :
          <div />
        }
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
