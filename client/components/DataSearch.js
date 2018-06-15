// const AylienNewsApi = require('aylien-news-api');
// import React, { Component } from 'react'
// import {connect} from 'react-redux'

// export default class DataSearch extends Component {
//   constructor() {
//     super()

//     this.state = {

//     }
//   }


// search () {

// const apiInstance = new AylienNewsApi.DefaultApi()
// const app_id = apiInstance.apiClient.authentications['app_id']
// app_id.apiKey = "6cf7f9f1"
// const app_key = apiInstance.apiClient.authentications['app_key']
// app_key.apiKey = 'ecc2171e1dad871a38c3120b0abc5cd5'

// let title = this.props.title
// const soure = this.props.source


// var opts = {
//   // 'title': 'trump && hillary',
//   'language': ['en'],
//   'notLanguage': ['es', 'it'],
//   'publishedAtStart': 'NOW-2DAY',
//   'publishedAtEnd': 'NOW',
//   'sourceName': ["BBC"],
//   'sourceLinksInCountMin': 50000,
//   'text': "startup company" /* used for search title or text for specific string */,
//   'perPage': 20
// };

// let info = []


// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ');
//     console.log('========================================');
//     let title;
//     for (var i = 0; i < data.stories.length; i++){
//       // const author = data.stories[i].author.exports.name
//       // const title = data.stories[i].title
//       // const body = data.stories[i].body
//       // const source = data.stories[i].source.name
//       // const domain = data.stories[i].source.domain
//       // const homePageUrl = data.stories[i].source.homePageUrl
//       // const keywords = data.stories[i].keywords
//       // const sentiment = data.stories[i].sentiment
//       // const summary = data.stories[i].summary
//       console.log(data.stories[i].title + " / " + data.stories[i].source.name)
//     }
//   }
// };


// apiInstance.listStories(opts, callback);

// }


// render() {
//   return (
//     <div className='datasearch-container'>

//      </div>
//   )
// }
// }
