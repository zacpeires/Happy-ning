
import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import axios from 'axios'
import SearchFormat from './SearchFormat'
import Button from '@material-ui/core/Button'


export default class UserNews extends Component {
  constructor() {
    super()
    this.state = {
      searchFor: '',
      searchData: []

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

 async handleSubmit (event) {
    event.preventDefault()
    let searchRequest = this.state.searchFor

    if (searchRequest.split(' ').length > 1) {
      searchRequest = searchRequest.split(' ').join('-')
    }

    const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?q=${searchRequest}&apiKey=4381ce80ddbd41408d0577e2416f1d15`)

    console.log(data)

    this.setState({
      searchFor: '',
      searchData: data.articles
    })
  }

  render() {


    return !this.state.searchData.length ? (
      <div className="user-topics-container">
      {/* <span>Search for news sources or topics of interest</span> */}
      <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchFor={this.state.searchFor}/>

      </div>
    ) : (
      <div className='searched-container'>
      <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchFor={this.state.searchFor}/>
      {

      this.state.searchData.map(news=> {
        return (
      <SearchFormat news={news} key={news.title} className='searched-articles'/>
        )
      }
    )
      }
      </div>

    )
  }
}

// const mapStateToProps = state => ({


// const mapDispatchToProps = dispatch => ({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(UserNews)



