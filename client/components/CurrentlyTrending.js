
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { addNewTopic } from '../store/topics'
import ReadArticle from './ReadArticle'



export class CurrentlyTrending extends Component {
  constructor() {
    super()

    this.state = {
      trendingNews: [],
      articleTitle: '',
      articleSource: ''
    }

    this.followNews = this.followNews.bind(this)
    this.readNews = this.readNews.bind(this)

  }

  async componentDidMount () {

    const {data} = await axios.get('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4381ce80ddbd41408d0577e2416f1d15')

    this.setState({
      trendingNews: data.articles.slice(0, 9),
      articleTitle: '',
      articleSource: ''
    })

  }

  followNews (sourceName) {
    const user = this.props.user
      this.props.addNewTopic({name: sourceName}, user.id)
  }

  readNews (title, sourceName) {
    this.setState({articleTitle: title,
      articleSource: sourceName
    })
  }


  render() {

    return (!this.state.articleTitle) ? (
      <div className='headlines'>
          <span className='trending-text'>Today's news:</span>
      {
        this.state.trendingNews.map(headline => {
          return (

            <div className='headline-container' id={headline.source.name} key={headline.title}>
              <div className="headline-text">{headline.title}</div>
              <div className="publication-name">{headline.source.name}</div>
              <div className="headline-btns">
              <Button variant="contained" color="primary" onClick={() => this.followNews(headline.source.name)}>Follow source</ Button>
              <Button variant="contained" color="primary" onClick={() =>
              this.readNews(headline.title, headline.source.name)}>Read</ Button>
              </div>
            </div>

          )
          }
        )
      }
      </div>
    ) : <ReadArticle />
  }
}


const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  addNewTopic: (topic, userId) => dispatch(addNewTopic(topic, userId)),
})

export default connect(null, mapDispatchToProps)(CurrentlyTrending)
