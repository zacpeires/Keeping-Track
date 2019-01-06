import React, { Component } from 'react'
import { connect } from 'react-router-dom'
import { logout } from '../store'

  class Navbar extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <nav className="nav">
        <div>
        { this.props.isLoggedIn ? <div>
        </div> : <div></div>
        }
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
