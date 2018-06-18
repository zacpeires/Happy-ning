
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import ArticleFormat from './ArticleFormat'
import { addNewArticle } from '../store/articles'


export class StoriesFromSource extends Component {
  constructor() {
    super()

    this.state = {
      news: [],
    }

    this.getNews = this.getNews.bind(this)
  }

  async getNews () {
    console.log(this.props.user)

    const channelName = this.props.match.params.topic
    const newsChannel = this.props.topics.filter(topic => {
      return topic.name === channelName
    })
  const sourceId = (newsChannel[0].sourceId)

    const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=4381ce80ddbd41408d0577e2416f1d15`)

    this.setState({
      news: data.articles
    })

  }

  // readNews (url) {
  //   this.props.addNewArticle(url)
  // }



  render() {

    if (!this.state.news.length) {
      this.getNews();
    }

    return (
      <div className='articles-container'>
      {
        this.state.news.map(news => {
          return (
            <ArticleFormat key={news.title} news={news} readNews={this.readNews}/>

          )
          }
        )
      }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewArticle: url => dispatch(addNewArticle(url))
})

const mapStateToProps = (state) => ({
  user: state.user,
  topics: state.topics
})

export default connect(mapStateToProps, mapDispatchToProps)(StoriesFromSource)
