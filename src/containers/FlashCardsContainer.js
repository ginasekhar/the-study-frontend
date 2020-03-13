import React, { Component } from 'react'
import FlashCardInput from '../components/flashCards/FlashCardInput'
import FlashCards from '../components/flashCards/FlashCards'
import { getFlashCards } from '../actions/flashcards'
import { connect } from 'react-redux'

class FlashCardsContainer extends Component {

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
        <FlashCards flashCards={flashCardsList} topicName={topicName}/>
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