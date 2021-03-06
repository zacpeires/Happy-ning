import axios from 'axios'

/**
 * ACTION TYPES
*/

const ADD_TOPIC = 'ADD_TOPIC'
const GET_USER_TOPICS = 'GET_TOPICS'
const REMOVE_USER_TOPIC = 'REMOVE_USER_TOPIC'

/**
 * INITIAL STATE
 */
const initialTopics = []

/**
 * ACTION CREATORS
 */

const addTopic = topic => ({type: ADD_TOPIC, topic})
const getTopics = topics => ({type: GET_USER_TOPICS, topics})
const removeTopic = topics => ({type: REMOVE_USER_TOPIC, topics})

/**
 * THUNK CREATORS
 */

export const addNewTopic = (topic, userId) => {
   return async (dispatch) => {
   const { data } = await axios.post(`/api/topic/${userId}`, topic)
     dispatch(addTopic(data))
   }
 }

 export const getUserTopic = (userId) => {
  return async (dispatch) => {
  const { data } = await axios.get(`/api/topic/${userId}`)
  console.log(data)
    dispatch(getTopics(data))
  }
}

export const removeTopicFromUser = (userId, topicId) => {
  return async (dispatch) => {
  const { data } = await axios.put(`/api/topic/${userId}/${topicId}`)
  dispatch(removeTopic(data))
  }
}




/**
 * REDUCER
 */
export default function(state = initialTopics, action) {
  switch (action.type) {
    case ADD_TOPIC:
      return [...state, action.topic]
    case GET_USER_TOPICS:
      return action.topics
    case REMOVE_USER_TOPIC:
      return  action.topics
    default:
      return state
  }
}
