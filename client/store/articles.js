import axios from 'axios'

/**
 * ACTION TYPES
*/

const GET_ARTICLE = 'GET_ARTICLE'

/**
 * INITIAL STATE
 */
const initialArticles = {}

/**
 * ACTION CREATORS
 */

const readArticle = article => ({type: GET_ARTICLE, article})

/**
 * THUNK CREATORS
 */

export const addNewArticle = (url) => {
   return async (dispatch) => {
    const {data} = await axios.post(`/api/news/extract`, {url: url})
      dispatch(readArticle(data[0]))
   }
 }


/**
 * REDUCER
 */
export default function(state = initialArticles, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return action.article
    default:
      return state
  }
}
