export const getFlashCards = (topicId) => {
  console.log("I am in function getFlashCards", topicId)
  return (dispatch) => {
    dispatch({type: "FETCHING_FLASHCARDS"})
    
    const fetchURL = `/sub_topics/${topicId}/flash_cards`
    return fetch(fetchURL)
    .then (response => response.json())
    .then (flashcards => dispatch({type: "LOADED_FLASHCARDS", payload: flashcards}))
  }
}

export const addFlashCard = (flashcard) => {
  console.log("in function addFlashCard", flashcard)
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
    .then (response => response.json())
    .then (flashcard => dispatch({type: "FLASHCARD_ADDED", payload: flashcard}))
  }
}

export const deleteFlashCard = (id) => {
  return (dispatch) => {
    console.log("In function delete FlashCard")
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
    .then (flashcards => dispatch({type: "FLASHCARD_DELETED"}))
  }
}