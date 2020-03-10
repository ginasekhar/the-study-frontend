// combineReducers
import {combineReducers} from 'redux'
import subjectReducer from "./subjectReducer"
import topicReducer from "./topicReducer"
import flashCardReducer from "./flashCardReducer"



const rootReducer = combineReducers({
    subjects: subjectReducer,
    topics : topicReducer,
    flashCards: flashCardReducer
})

export default rootReducer