export const getTopics = () => {
  return (dispatch) => {
    dispatch({type: "FETCHING_TOPICS"})

    const fetchURL = '/sub_topics'
    return fetch(fetchURL)
    .then (response => response.json())
    .then (topics => dispatch({type: "LOADED_TOPICS", payload: topics}))
  }
}

export const addTopic = (topic) => {
  console.log("in function addTopic")
  return (dispatch) => {
    dispatch({type: "ADD_TOPIC"}, topic)

    const fetchURL = '/sub_topics'
    const configObj = {
      method: "POST",
      body: JSON.stringify(topic),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      } 
    }
    return fetch(fetchURL,configObj )
    .then (response => response.json())
    .then (topic => dispatch({type: "TOPIC_ADDED", payload: topic}))
  }
}

export const deleteTopic = (id) => {
  return (dispatch) => {
    console.log("In function delete Topic")
    dispatch({type: "DELETE_TOPIC"})

    const fetchURL = `/sub_topics/${id}`
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    return fetch(fetchURL, configObj)
    .then (response => response.json())
    .then (topics => dispatch({type: "TOPIC_DELETED"}))
  }
}