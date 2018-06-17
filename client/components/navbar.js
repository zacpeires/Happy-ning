import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'



export class Navbar extends Component {
    constructor() {
    super()

    this.state = {
      showSidebar: ''
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    if (!this.state.showSidebar) {
    this.setState({
      showSidebar: 'sidenav-fixed'
    })
  } else {
    this.setState({
      showSidebar: ''
    })
  }
  }

  render() {
    const {handleClick, isLoggedIn} = this.props

    return  (
  <div className='navbar-container'>
    <nav>
      <div className="nav-wrapper">
      <div className="brand-logo"  onClick={this.toggleSidebar}>Happy-ning</div>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li onClick={this.toggleSidebar}><i className="material-icons">art_track</i></li>
      </ul>

      {isLoggedIn ? (
        <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><a href="#" onClick={handleClick}>
                Logout
              </a></li>
          </ul>
        </div>
      ) : (
        <div>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/login">Login</Link></li>
            <li>  <Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      )}
      </div>
      <Sidebar sidenav={this.state.showSidebar} toggleSidebar={this.toggleSidebar}/>
      </nav>
    </div>
  )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}


export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
