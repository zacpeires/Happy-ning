import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'



const UserStories = props => {
  return (


  <div className='headline-container'>
  <div className="publication-name">{props.topic.name}</div>
  <div className="headline-btns">
  <Button variant="contained" color="primary" onClick={() => props.unfollowNews(props.user.id, props.topic.id)}>Unfollow media</ Button>

  <Link to={`/news/${props.topic.name}`}>
  <Button variant="contained" color="primary" >See articles from this source</ Button>
  </Link>
  </div>
  </div>

)
}

export default UserStories
