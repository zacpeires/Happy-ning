
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { addNewArticle } from '../store/articles'
// import { checkArticleSentiment } from '../store/articleSentiment'

export class ReadArticle extends Component {
    constructor() {
    super()

    this.state = {
      article: {},
      articleSentiment: {},
      beenCalled: false
    }

    this.getArticles = this.getArticles.bind(this)

  }


  async getArticles () {
    const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${this.props.match.params.sourceId}&apiKey=4381ce80ddbd41408d0577e2416f1d15`)




    const newArticle = data.articles.filter(article => {

      return article.title === this.props.match.params.title
    })


    console.log(newArticle[0])


      this.props.addNewArticle(newArticle[0].url)



    console.log(data)


    setTimeout(() => {
      this.setState({
        article: this.props.articles
      })
    }, 2000)
  }




  render() {
    if (!this.state.article.article) {
        this.getArticles()
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
  // articleSentiment: state.articleSentiment

})

const mapDispatchToProps = (dispatch) => ({
  addNewArticle: url => dispatch(addNewArticle(url)),
  // checkArticleSentiment: url => dispatch(checkArticleSentiment(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadArticle)
