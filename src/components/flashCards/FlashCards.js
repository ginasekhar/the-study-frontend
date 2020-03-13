import React, { Component } from 'react';
import FlashCard from './FlashCard';

class FlashCards extends Component {
  render() {

    const flashCardsList =  this.props.flashCards.map(flashCard => 
       <FlashCard key={flashCard.id} flashcard={flashCard} />
    )

    let displayMsg;
      if (this.props.topicName)
        displayMsg = (flashCardsList.length > 0 ? "Flash Cards in " + this.props.topicName : "No Topics found for " + this.props.topicName)
      else 
        displayMsg = "Please select a topic"
      
        return (
        <div className="flash-cards-list flex-column flex-wrap">
          <h4> {displayMsg} </h4>
          <ul className="flash-cards-ul">
            {flashCardsList} 
          </ul>
        </div>
      );

    }
};

export default FlashCards;