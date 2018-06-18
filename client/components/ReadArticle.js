
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomePage extends Component {
    constructor() {
    super()

    this.state = {
      article: {},
      articleSentiment: {}
    }

    this.getArticles = this.getArticles.bind(this)

  }


  getArticles () {
    this.setState({
      article: this.props.articles,
      articleSentiment: this.props.articleSentiment
    })

    console.log(this.state)
  }


  render() {
    if (!this.state.article.article && this.state) {
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
     <div className='sentiment-analysis-container'>
     {

       this.state.articleSentiment.polarity ? (
       <div>
       <div>{'Polarity:'} {this.state.articleSentiment.polarity}</div>
       <div>
       {'Polarity confidence:'} {this.state.articleSentiment.polarity_confidence}</div>
       <div>
        {'Subjectivity: '}
       {this.state.articleSentiment.subjectivity}</div>
       <div>
       {'Subjectivity confidence:'} {this.state.articleSentiment.subjectivity_confidence}</div>
       </div>
       ) : (
         <div/>
       )
     }
       </div>
      </div>
    )
  }
}





const mapStateToProps = (state) => ({
  user: state.user,
  articles: state.articles,
  articleSentiment: state.articleSentiment

})


export default connect(mapStateToProps)(HomePage)
