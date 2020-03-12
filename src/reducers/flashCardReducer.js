const initialState = {
  flashCards: [],
  loading: false}

export default function flashCardReducer(state = 
  initialState, action) {
    switch (action.type) {
      case "FETCHING_FLASHCARDS" : 
      return {...state, loading: true }
    case "LOADED_FLASHCARDS" : 
      return {...state, 
        flashCards: action.payload,
        loading:false}
    case 'ADD_FLASHCARD':
      return { ...state, loading:true }
    case 'FLASHCARD_ADDED':
      return { ...state, flashCards: [...state.flashCards, action.payload], loading:false }
    case 'DELETE_FLASHCARD':
      return { ...state, flashCards: [...state.flashCards.filter(flashCard => flashCard.id !== action.payload)], loading:true }
    case "FLASHCARD_DELETED" : 
      return {...state, loading: true }
      default:
        return state;
    }
}