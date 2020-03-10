const initialState = {
  topics: [],
  loading: false}

export default function topicReducer (state = initialState, action) {
  switch (action.type){
    case "FETCHING_TOPICS" : 
      return {...state, loading: true }
    case "LOADED_TOPICS" : 
      return {...state, 
        subTopics: action.payload,
        loading:false}
    case 'ADD_SUBTOPIC':
      return state
    case 'DELETE_SUBTOPIC':
      return state
    case 'UPDATE_SUBTOPIC':
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