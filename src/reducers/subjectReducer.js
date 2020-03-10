const initialState = {
        subjects: [],
        loading: false}
  
export default function subjectReducer (state = initialState, action) {
  switch (action.type){
    case "FETCHING_SUBJECTS" : 
      return {...state, loading: true }
    case "LOADED_SUBJECTS" : 
      return {...state, 
        subjects: action.payload,
        loading:false}
    default:
      return state
  }
}