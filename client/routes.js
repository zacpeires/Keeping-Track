import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from './store';
import { Navbar, LoginPage } from './components';

class Routes extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadUserData();
  }

  render() {
    console.log(this.props.isLoggedIn);

    return (
      <div className="routes-container">
        {this.props.isLoggedIn ? (
          <div>
            <Navbar />
            <Switch />
          </div>
        ) : (
          <LoginPage />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  loadUserData: () => dispatch(me())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);
