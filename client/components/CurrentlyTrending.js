import React, { Component } from 'react'
import axios from 'axios'
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
    // this.readNews = this.readNews.bind(this)

  }

  async componentDidMount () {

    const {data} = await axios.get('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4381ce80ddbd41408d0577e2416f1d15')


    const refinedData = data.articles.filter((article => {
      return article.source.id
    }))

    this.setState({
      trendingNews: refinedData.slice(0, 9),
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

   async readNews (title, sourceName, url) {
    const {data} = await axios.post(`/api/news/`, {url: url})

  }


  render() {
    if (this.props.user.id && !this.props.topics.length && this.state.checkedForTopics === false) {
      this.getTopics(this.props.user.id)
    }

    console.log()


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
              <Button variant="contained" color="primary" onClick={() =>
              this.readNews(headline.title, headline.source.name, headline.url)}>Read</ Button>
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
  // readNewsArticle: url => dispatch(readNewsArticle(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyTrending)
