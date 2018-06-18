
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomePage extends Component {
    constructor() {
    super()

    this.state = {
      article: {}
    }

    this.getArticles = this.getArticles.bind(this)

  }


  getArticles () {
    this.setState({
      article: this.props.articles
    })

    console.log(this.state.article)
  }


  render() {
    if (!this.props.articles.length) {
      setTimeout(() => {
        this.getArticles()
      }, 500)
    }

    return (
      <div className='read-article-container'>
      <div className='author-and-contents'>
      <div className='article-author'>
        {this.state.article.title}
      </div>
      <div className='article-title'>
        {this.state.article.author}
      </div>
      </div>
      <div className='article-contents'>
     {this.state.article.article}
     </div>
      </div>
    )
  }
}





const mapStateToProps = (state) => ({
  user: state.user,
  articles: state.articles
})


export default connect(mapStateToProps)(HomePage)
