
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'


export default class UserNews extends Component {
  constructor() {
    super()
    this.state = {
      searchFor: '',

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange (event) {
    this.setState({
      searchFor: event.target.value
    })
    console.log(this.state.searchFor)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('hello')
    const searchRequest = this.state.searchFor
    console.log(searchRequest)

    this.setState({
      searchFor: ''
    })
  }

  render() {


    return (
      <div className="user-topics-container">
      {/* <span>Search for news sources or topics of interest</span> */}
      <form>

    <input type="search" id="mySearch" value={this.state.searchFor} onChange={this.handleChange}/>
    <Button variant="contained"
          color="primary" onClick={this.handleSubmit}>Search</Button>
      </form>

      </div>
    )
  }
}

// const mapStateToProps = state => ({


// const mapDispatchToProps = dispatch => ({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(UserNews)



