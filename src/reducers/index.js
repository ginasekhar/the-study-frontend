// combineReducers
import {combineReducers} from 'redux'
import subjectReducer from "./subjectReducer"
import subTopicReducer from "./manageSubTopic"
import flashCardReducer from "./manageflashCard"



const rootReducer = combineReducers({
    subjects: subjectReducer,
    subTopics : subTopicReducer,
    flashCards: flashCardReducer
})

export default rootReducer