import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const ArticleFormat = props => {
  return (
    <div
      className="articles"
    >
      <div className="headline-text">{props.news.title}</div>
      <div className="publication-name">{props.news.source.name}</div>
      <div className="headline-btns">
      <Link to={`/article/${props.news.source.id}/${props.news.title}`}>
        <Button
          variant="contained"
          color="primary"
        >
          Read
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default ArticleFormat
