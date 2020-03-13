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
      dispatch({type: "TOPIC_ADDED", payload: topic})
    })
  }
}

export const deleteTopic = (id) => {
  return (dispatch) => {
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

export const setCurrentTopic = (selectedTopic) => {
  return (dispatch) => {
    dispatch({type: "SET_CURRENT_TOPIC", payload: selectedTopic })
  }
}