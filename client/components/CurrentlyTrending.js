import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { addNewTopic, getUserTopic } from '../store/topics'




export class CurrentlyTrending extends Component {
  constructor() {
    super()

    this.state = {
      trendingNews: [],
      checkedForTopics: false,
    }

    this.followNews = this.followNews.bind(this)
    this.getTopics = this.getTopics.bind(this)

  }

  async componentDidMount () {

    const {data} = await axios.get('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4381ce80ddbd41408d0577e2416f1d15')


    const refinedData = data.articles.filter((article => {
      return article.source.id
    })).slice(0, 9)

  this.setState({
    trendingNews: refinedData,
  })

  }


  getTopics (userId) {
    this.props.getUserTopic(userId)
    this.setState({
      checkedForTopics: true
    })
  }


  followNews (sourceName, sourceId) {
    console.log(this.props.user)
    const user = this.props.user
    let hasFavouritedTopic = false
    this.props.topics.forEach(topic => {
      if (topic.name === sourceName) {
        hasFavouritedTopic = true
      }
    })

    if (hasFavouritedTopic === false) {
      this.props.addNewTopic({name: sourceName,
      sourceId: sourceId}, user.id)
    }
  }

  //  readNews (url) {
  //   this.props.addNewArticle(url)
  //   this.props.checkArticleSentiment(url)
  // }


  render() {
    if (this.props.user.id && !this.props.topics.length && this.state.checkedForTopics === false) {
      this.getTopics(this.props.user.id)
    }


    return (
      <div className='headlines'>
          <span className='trending-text'>Today's news:</span>

      {
        this.state.trendingNews.map(headline => {
          return (

            <div className='headline-container' id={headline.source.name} key={headline.title}>
              <div className="headline-text">{headline.title}</div>
              <div className="publication-name">{headline.source.name}</div>
              <div className="headline-btns">
              <Button variant="contained" color="primary" onClick={() => this.followNews(headline.source.name, headline.source.id)}>Follow source</ Button>
              <Link to={`/article/${headline.source.id}/${headline.title}`}>
              <Button variant="contained" color="primary">Read</ Button>
              </Link>


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

const mapStateToProps = state => ({
    topics: state.topics
})

const mapDispatchToProps = (dispatch) => ({
  addNewTopic: (topic, userId) => dispatch(addNewTopic(topic, userId)),
  getUserTopic: id => dispatch(getUserTopic(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyTrending)
