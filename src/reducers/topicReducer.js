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
      return state
    case 'UPDATE_TOPIC':
      return state
    default:
      return state
  }
}

// export default function subTopicReducer(state = initialState,
//    action) {
// switch (action.type) {
//   case 'ADD_SUBTOPIC':
//     return { ...state, subTopics: [...state.subTopics, action.subTopic] }
//   case 'DELETE_FLASHCARD':
//     return {
//       ...state, subTopics: state.subTopics.filter(subTopic => subTopic.id !== action.id)      
//     }
//   default:
//     return state;
// }