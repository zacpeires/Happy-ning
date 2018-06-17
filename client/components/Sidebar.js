import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Sidebar = props => {
  return (
    <>
      <ul id="slide-out" className={`sidenav ${props.sidenav}`} onClick={props.toggleSidebar}>
        <li>
          <div className="user-view">
            <div className="background">
              {/* <img src="images/office.jpg" /> */}
            </div>
            <a href="#user">
              {/* <img className="circle" src="images/yuna.jpg" /> */}
            </a>
            <a href="#name">
              <span className="white-text name">Account Details and Settings:</span>
            </a>
            <a href="#name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span className="white-text email">{props.user.email}</span>
            </a>
          </div>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <Link to='/' className="waves-effect" href="#!">
            Trending News and Topics
          </Link>
        </li>
        <li>
          <Link to='/search' className="waves-effect" href="#!">
            Search
          </Link>
        </li>
        <li>
          <Link to='/user-news' className="waves-effect" href="#!">
            My News
          </Link>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Analytics
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </>
  )
}


const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Sidebar)

