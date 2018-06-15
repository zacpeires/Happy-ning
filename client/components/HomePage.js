
import React, { Component } from 'react'
import {connect} from 'react-redux'
import CurrentlyTrending from './CurrentlyTrending'


export default class HomePage extends Component {



  render() {
    return (
      <div className='homepage-container'>
        <div className='homepage-top-half'>
          <figure>
           <img src='https://www.planwallpaper.com/static/images/background-wallpapers-32.jpg'
           className='homepage-image'/>
          </figure>
          <div className='homepage-text'>Track you're favourite news and topics</div>
          <div className="currently-trending-container">
          <CurrentlyTrending />
          </div>
        </div>

      </div>
    )
  }
}
