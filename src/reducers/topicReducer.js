const initialState = {
  topics: [],
  currentTopic: {},
  loading: false}

export default function topicReducer (state = initialState, action) {
  
  switch (action.type){
    case "FETCHING_TOPICS" : 
      return {...state, loading: true }
    case "LOADED_TOPICS" : 
      return {...state, 
        topics: action.payload,
        loading:false}
    case 'ADD_TOPIC':
      return { ...state, loading:true }
    case 'TOPIC_ADDED':
      return { ...state, topics: [...state.topics, action.payload], loading:false }
    case 'DELETE_TOPIC':
      return { ...state, topics: [...state.topics.filter(topic => topic.id !== action.payload)], loading:true }
    case "TOPIC_DELETED" : 
      return {...state, loading: true }
    case "SET_CURRENT_TOPIC" : 
      return {...state, currentTopic: action.payload }
    default:
      return state
  }
}
