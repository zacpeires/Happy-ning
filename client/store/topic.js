import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
*/

const ADD_TOPIC = 'ADD_TOPIC'
const GET_USER_TOPIC = 'GET_USER_TOPIC'

/**
 * INITIAL STATE
 */
const initialTopics = []

/**
 * ACTION CREATORS
 */

const addTopic = topic => ({type: ADD_TOPIC, topic})
const getUserTopic = topics => ({type: GET_USER_TOPIC, topics})

/**
 * THUNK CREATORS
 */

export const addNewTopic = (topic, userId) => {
   return async (dispatch) => {
   const { data } = await axios.post(`/api/topic/${userId}`, topic)
   console.log(data)
     dispatch(addTopic(data))
   }
 }

 export const getTopic = (userId) => {
  return async (dispatch) => {
  const { data } = await axios.get(`/api/topic/${userId}`)
    dispatch(getUserTopic(data))
  }
}



/**
 * REDUCER
 */
export default function(state = initialTopics, action) {
  switch (action.type) {
    case ADD_TOPIC:
      return [...state, action.topic]
    case GET_USER_TOPIC:
      return action.topics
    default:
      return state
  }
}
