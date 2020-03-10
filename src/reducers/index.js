// combineReducers
import {combineReducers} from 'redux'
import subjectReducer from "./subjectReducer"
// import subTopicReducer from "./subTopicReducer"
import flashCardReducer from "./flashCardReducer"



const rootReducer = combineReducers({
    subjects: subjectReducer,
    // subTopics : subTopicReducer,
    flashCards: flashCardReducer
})

export default rootReducer