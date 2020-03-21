export const getFlashCards = (topicId) => {
  
  return (dispatch) => {
    dispatch({type: "FETCHING_FLASHCARDS"})
    
    const fetchURL = `/sub_topics/${topicId}/flash_cards`
    return fetch(fetchURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Could not get flash cards')
      }
    })
    .then (flashcards => dispatch({type: "LOADED_FLASHCARDS", payload: flashcards}))
    .catch((error) => {
      alert(`${error} on Fetching Flashcards` )
    }); 
  }
}

export const addFlashCard = (flashcard) => {
  console.log('b')
  return (dispatch) => {
    dispatch({type: "ADD_FLASHCARD", payload: flashcard})

    const fetchURL = '/flash_cards'
    const configObj = {
      method: "POST",
      body: JSON.stringify(flashcard),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      } 
    }
    return fetch(fetchURL,configObj )
    .then((response) => {
      if (response.ok) {
        console.log('c')
        return response.json();
      } else {
        throw new Error('Could not create flash card')
      }
    })
    .then (flashcard => dispatch({type: "FLASHCARD_ADDED", payload: flashcard}))
    .catch((error) => {
      alert(`${error} on Creating New Flash Card` )
    }); 
  }
  console.log('d')
}

export const deleteFlashCard = (id) => {
  return (dispatch) => {
    
    dispatch({type: "DELETE_FLASHCARD",payload: id})

    const fetchURL = `/flash_cards/${id}`
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    return fetch(fetchURL, configObj)
    .then (dispatch({type: "FLASHCARD_DELETED"}))
    .catch((error) => {
      alert(`${error} on delete flash card` )
    }); 
  }
}



