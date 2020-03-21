import React, { Component } from 'react'
import FlashCardInput from '../components/flashCards/FlashCardInput'
import FlashCards from '../components/flashCards/FlashCards'
import { getFlashCards } from '../actions/flashcards'
import { connect } from 'react-redux'

class FlashCardsContainer extends Component {

  state = {
    sortOrder: "none",
    searchTerm: ""
  }

  handleOnChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }

  sortAndFilterFlashCards = (list) => {

    let filteredList = list;

    if (this.state.searchTerm.trim() !== "") {
      const ucaseSearchTerm = this.state.searchTerm.toUpperCase()
      
      filteredList = list.filter(flashcard => {
        return (flashcard.question.toUpperCase().includes(ucaseSearchTerm) ||
                flashcard.answer.toUpperCase().includes(ucaseSearchTerm))
      })
      
      console.log("filtered list", filteredList)

    } 
    
    switch(this.state.sortOrder) {
      case "none" :
        break;
      case "ques-a" : 
      filteredList.sort((a, b) => (a.question.toUpperCase() > b.question.toUpperCase()) ? 1 : -1)
        break;
      case "ques-d" : 
      filteredList.sort((a, b) => (b.question.toUpperCase() > a.question.toUpperCase()) ? 1 : -1)
        break;
      case "ans-a" : 
      filteredList.sort((a, b) => (a.answer.toUpperCase() > b.answer.toUpperCase()) ? 1 : -1)
        break; 
      case "ans-d" : 
      filteredList.sort((a, b) => (b.answer.toUpperCase() > a.answer.toUpperCase()) ? 1 : -1)      
      default :
        break;
    } 
      
    return filteredList;

  }

  render() {
    
    const topicId = this.props.currentTopic.topicId
    const topicName = this.props.currentTopic.topicName
    let flashCardsList = [];

    if (this.props.currentTopic.selected ) {
      flashCardsList = this.props.flashCards.filter(flashCard => flashCard.sub_topic.id == topicId )
    }
       
    return (
      <div>
        <FlashCardInput topicId={topicId}/> 
        <div className='sort-selection'>
          <label>
            Choose a sort order:
          <select value={this.state.sortOrder} name="sortOrder" id="sort-order" onChange={this.handleOnChange}>
            <option value="none">None</option>
            <option value="ques-a">Term Ascending</option>
            <option value="ques-d">Term Descending</option>
            <option value="ans-a">Definition Ascending</option>
            <option value="ans-d">Definition Descending</option>
          </select>
          </label>
        </div>  
        <div>
          <label>
            Filter results by keyword:
            <input name="searchTerm" type="text" className="search-term" placeholder="Keyword" onChange={this.handleOnChange}/>
          </label>
        </div>

        <FlashCards flashCards={this.sortAndFilterFlashCards(flashCardsList)} topicName={topicName}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => { 
  return {
    flashCards: state.flashCards.flashCards,
    currentTopic: state.topics.currentTopic,
    loadingflashCards: state.flashCards.loading
  }
}

export default connect (mapStateToProps, { getFlashCards })(FlashCardsContainer)