import React from 'react'
import Button from '@material-ui/core/Button'

const ArticleFormat = props => {
  return (
    <div
      className="articles"
    >
      <div className="headline-text">{props.news.title}</div>
      <div className="publication-name">{props.news.source.name}</div>
      <div className="headline-btns">
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.readNews(props.news.title, props.news.source.name)}
        >
          Read
        </Button>
      </div>
    </div>
  )
}

export default ArticleFormat
