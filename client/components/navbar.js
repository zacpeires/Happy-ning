import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'



const Navbar = ({handleClick, isLoggedIn}) => (
  <div className='navbar-container'>
    <nav>
      <div className="nav-wrapper">
      <div className="brand-logo">Happy-ning</div>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li><i className="material-icons">art_track</i></li>
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
      </nav>
    </div>

)

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
