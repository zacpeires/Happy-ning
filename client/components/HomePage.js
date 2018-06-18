
import React, { Component } from 'react'
import CurrentlyTrending from './CurrentlyTrending'
import { connect } from 'react-redux'

export class HomePage extends Component {
    constructor() {
    super()

  }


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
          <CurrentlyTrending user={this.props.user} hello="hello"/>
          </div>
        </div>

      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(HomePage)
