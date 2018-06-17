
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import ArticleFormat from './ArticleFormat'


export class StoriesFromSource extends Component {
  constructor() {
    super()

    this.state = {
      news: [],
    }

    this.readNews = this.readNews.bind(this)
    this.getNews = this.getNews.bind(this)
  }

  async getNews () {
    const channelName = this.props.match.params.topic
    const newsChannel = this.props.topics.filter(topic => {
      return topic.name === channelName
    })
  const sourceId = (newsChannel[0].sourceId)

    const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=4381ce80ddbd41408d0577e2416f1d15`)
          console.log(data.articles)

    this.setState({
      news: data.articles
    })

  }

  readNews (title, sourceName) {
  }


  render() {

    if (!this.state.news.length) {
      this.getNews();
    }

    return (
      <div className='articles-container'>
      {
        this.state.news.map(news => {
          return (
            <ArticleFormat key={news.title} news={news} readNews={this.readNews} />

          )
          }
        )
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  topics: state.topics
})

export default connect(mapStateToProps, null)(StoriesFromSource)
