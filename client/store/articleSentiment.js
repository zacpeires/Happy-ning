import axios from 'axios'


const initialSentiment = {}


const CHECK_ARTICLE = 'CHECK_ARTICLE'

const analyseArticle = article => ({
  type: CHECK_ARTICLE,
  article
})


export const checkArticleSentiment = (url) => {
  return async (dispatch) => {
   const {data} = await axios.post(`/api/news/sentiment`, {url: url})
     dispatch(analyseArticle(data[0]))
  }
}



export default function(state = initialSentiment, action) {
  switch (action.type) {
    case CHECK_ARTICLE:
      return action.article
    default:
      return state
  }
}
