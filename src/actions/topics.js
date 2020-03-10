export const getTopics = () => {
  return (dispatch) => {
    dispatch({type: "FETCHING_TOPICS"})

    let fetchURL = '/sub_topics'
    return fetch(fetchURL)
    .then (response => response.json())
    .then (topics => dispatch({type: "LOADED_TOPICS", payload: topics}))
  }
}