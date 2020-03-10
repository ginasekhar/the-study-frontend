export const getSubjects = () => {
  console.log("I am getting subjects")
  return (dispatch) => {
    dispatch({type: "FETCHING_SUBJECTS"})
    return fetch('/subjects')
    .then (response => response.json())
    .then (subjects => dispatch({type: "LOADED_SUBJECTS", payload: subjects}))
  }
}