import React, { Component } from 'react';
import FlashCard from './FlashCard';

class FlashCards extends Component {
  render() {

    
    console.log("In FlashCards, I got passed in", this.props.flashcards)
    const myflashCards =  this.props.flashCards.map(flashCard => 
       <FlashCard key={flashCard.id} flashcard={flashCard} />
    )
      
        return (
        <div className="flash-cards-list flex-column flex-wrap">
          <h3> Flash Cards for {this.props.topicName} </h3>
          <ul className="flash-cards-ul">
            {myflashCards.length > 0 ? myflashCards : "No flashcards yet"}
          </ul>
        </div>
      );

    }
};

export default FlashCards;