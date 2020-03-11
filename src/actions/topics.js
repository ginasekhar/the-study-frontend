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
  console.log("in function addTopic", topic)
  return (dispatch) => {
    dispatch({type: "ADD_TOPIC", payload:topic} )

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
    .then (topic => {
      console.log("This is topic", topic)
      dispatch({type: "TOPIC_ADDED", payload: topic})
    })
  }
}

export const deleteTopic = (id) => {
  return (dispatch) => {
    console.log("In function delete Topic, id is", id)
    dispatch({type: "DELETE_TOPIC", payload: id})

    const fetchURL = `/sub_topics/${id}`
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    return fetch(fetchURL, configObj)
    .then (dispatch({type: "TOPIC_DELETED"}))
  }
}