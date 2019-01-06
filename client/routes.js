import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { me } from './store'

class Routes extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadUserData()
  }

  render() {

    return (
      <div>
          <Switch>

          </Switch>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  loadUserData: () => dispatch(me())
})

export default withRouter(
  connect(null, mapDispatchToProps)(Routes)
)
