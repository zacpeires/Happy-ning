import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const SearchFormat = props => {
  return (
    <div
      className="searched-topic"
    >
      <div className="search-text">{props.news.title}</div>
      <div className="publication-name">{props.news.source.name}</div>
      <div className="headline-btns">
      <Link to='/article'>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.readNews(props.news.url)}
        >
          Read
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default SearchFormat
