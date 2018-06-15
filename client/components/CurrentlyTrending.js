
import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Button from '@material-ui/core/Button'



export default class CurrentlyTrending extends Component {
  constructor() {
    super()

    this.state = {
      headlines: []
    }


  }

  async componentDidMount () {

    const {data} = await axios.get('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4381ce80ddbd41408d0577e2416f1d15')


    this.setState({headlines: data.articles.slice(0, 10)})

  }

  followNews () {

  }


  render() {
    console.log(this.state.headlines)

    return (
      <div className='headlines'>

      {
        this.state.headlines.map(headline => {
          return (

            <div className='headline-container' id={headline.source.name} key={headline.title}>
              <div className="headline-text">{headline.title}</div>
              <div className="publication-name">{headline.source.name}</div>
              <div className="headline-btns">
              <Button variant="contained" color="primary" onClick={() => followNews(headline.source.name)}>Follow Media</ Button>
              <Button variant="contained" color="primary" >Read</ Button>
              </div>
            </div>

          )
          }
        )
      }
      </div>
    )
  }
}
/**
 * CONTAINER
 */







/**
 * PROP TYPES
 */
