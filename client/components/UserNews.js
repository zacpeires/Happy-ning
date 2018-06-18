import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserStories from './UserStories'
import {getUserTopic, removeTopicFromUser} from '../store/topics'


export class UserNews extends Component {
  constructor() {
    super()
    this.state = {
      removedAllTopics: false
    }

    this.unfollowNews = this.unfollowNews.bind(this)
    this.loadUser = this.loadUser.bind(this)

  }

  loadUser(user) {
    this.props.getUserTopic(user)
  }

  unfollowNews(user, topic) {
    console.log(this.state.removedAllTopics)
    console.log(this.props.topics.length)

    this.props.removeTopicFromUser(user, topic)
    if (this.props.topics.length === 1) {
      this.setState({
        removedAllTopics: true
      })
    }
  }

  render() {
    if (this.props.user.id && !this.props.topics.length && !this.state.removedAllTopics) {
      this.loadUser(this.props.user.id)
    }

    if (!this.props.topics) {
      return <div />
    }


    return (
      <div className="user-topics-container">
        {this.props.topics.map(topic => {

          return <UserStories topic={topic} unfollowNews={this.unfollowNews} currentNews={this.currentNews} user={this.props.user}  key={topic.id}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  topics: state.topics
})

const mapDispatchToProps = dispatch => ({
  removeTopicFromUser: (userId, topicId) =>
    dispatch(removeTopicFromUser(userId, topicId)),
  getUserTopic: id => dispatch(getUserTopic(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserNews)
