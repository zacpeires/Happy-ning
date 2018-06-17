import React from 'react'
import Button from '@material-ui/core/Button'



const UserStories = props => {
  return (


  <div className='headline-container'>
  <div className="publication-name">{props.topic.name}</div>
  <div className="headline-btns">
  <Button variant="contained" color="primary" onClick={() => props.unfollowNews(props.user.id, props.topic.id)}>Unfollow media</ Button>
  <Button variant="contained" color="primary" onClick={() =>
  props.currentNews(props.topic.name)}>See articles form this source</ Button>
  </div>
  </div>

)
}

export default UserStories
