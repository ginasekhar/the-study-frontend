import React, { Component } from 'react';
import FlashCard from './FlashCard';

class FlashCards extends Component {
  render() {

    
    console.log("In FlashCards, I got passed in", this.props.flashcards)
    const myflashCards =  this.props.flashCards.map(flashCard => 
    
    <FlashCard 
      key={flashCard.id}
      flashcard={flashCard} />)
    return (
      <ul>
        {myflashCards.length > 0 ? myflashCards : "No flashcards yet"}
      </ul>
    );
  }
};

export default FlashCards;