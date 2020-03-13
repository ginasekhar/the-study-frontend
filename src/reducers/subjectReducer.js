const initialState = {
        subjects: [],
        currentSubject: {selected: false, subjectId: null, subjectName: ''},
        loading: false}
  
export default function subjectReducer (state = initialState, action) {
  switch (action.type){
    case "FETCHING_SUBJECTS" : 
      return {...state, loading: true }
    case "LOADED_SUBJECTS" : 
      return {...state, 
        subjects: action.payload,
        loading:false}
    case "SET_CURRENT_SUBJECT" : 
      return {...state, currentSubject: action.payload }
    default:
      return state
  }
}