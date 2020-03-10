export const getTopicsForSubject = (subjectId) => {
  console.log("I am getting topics for subject", subjectId)
  return (dispatch) => {
    dispatch({type: "FETCHING_TOPICS"})
    let fetchURL = '/subjects/' + subjectId
    return fetch(fetchURL)
    .then (response => response.json())
    .then (topics => dispatch({type: "LOADED_TOPICS", payload: topics}))
  }
}