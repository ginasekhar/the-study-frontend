const initialState = {
  topics: [],
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
      return { ...state, topics: [...state.topics, action.topic], loading:false }
    case 'DELETE_TOPIC':
      return { ...state, topics: [...state.topics.filter(topic => topic.id !== action.id)], loading:true }
    case "TOPIC_DELETED" : 
      return {...state, loading: true }
    default:
      return state
  }
}
